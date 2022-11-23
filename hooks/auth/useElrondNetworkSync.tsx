/* eslint-disable react-hooks/exhaustive-deps */
import { useSnapshot } from 'valtio';
import { useEffect, useState, useRef } from 'react';
import {
  accountState,
  clearAuthStates,
  loginInfoState,
  setAccountState,
  setLoggingInState,
  setLoginInfoState,
} from '../../store/auth';
import * as network from '../../store/network';
import { Address, Account } from '@elrondnetwork/erdjs';
import { WalletProvider } from '@elrondnetwork/erdjs-web-wallet-provider';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import { ApiNetworkProvider } from '@elrondnetwork/erdjs-network-providers';
import {
  networkConfig,
  chainType,
  DAPP_INIT_ROUTE,
} from '../../config/network';
import { DappProvider } from '../../types/network';
import { getBridgeAddressFromNetwork } from '../../utils/bridgeAddress';
import { getParamFromUrl } from '../../utils/getParamFromUrl';
import { LoginMethodsEnum } from '../../types/enums';
import { WcOnLogin } from '../../utils/walletConnectCbs';
import { useLogout } from './useLogout';
import { useEffectOnlyOnUpdate } from '../tools/useEffectOnlyOnUpdate';
import { isLoginExpired } from '../../utils/expiresAt';
import { useApiQuery, ApiQueryType } from '../interaction/useApiQuery';

const unsupportedSignMethods = [LoginMethodsEnum.ledger];

export const useElrondNetworkSync = () => {
  const { logout } = useLogout();
  const [accountDone, setAccountDone] = useState(false);
  const [loginInfoDone, setLoginInfoDone] = useState(false);

  const accountSnap = useSnapshot(accountState);
  const loginInfoSnap = useSnapshot(loginInfoState);

  const dappProviderRef = useRef<DappProvider>();
  const apiNetworkProviderRef = useRef<ApiNetworkProvider>();

  const { data: accessTokenData } = useApiQuery({
    path: '/api/auth/issueJsonWebToken',
    type: ApiQueryType.POST,
    payload: {
      address: accountSnap.address,
      loginToken: loginInfoSnap.loginToken,
      signature: loginInfoSnap.signature,
      data: {},
    },
    autoInit:
      !unsupportedSignMethods.includes(loginInfoSnap.loginMethod) &&
      !loginInfoSnap.jwt &&
      Boolean(
        loginInfoSnap.loginToken &&
          loginInfoSnap.signature &&
          accountSnap.address
      ),
  });

  useEffect(() => {
    const accountStorage = localStorage.getItem('nf_tim_account');
    if (accountStorage) {
      const parsedStorage = JSON.parse(accountStorage);
      setAccountState('address', parsedStorage.address);
      setAccountState('nonce', parsedStorage.nonce);
      setAccountState('balance', parsedStorage.balance);
      if (!parsedStorage.address) setLoggingInState('pending', false);
      setAccountDone(true);
    } else {
      setLoggingInState('pending', false);
    }
  }, []);

  useEffect(() => {
    const loginInfoStorage = localStorage.getItem('nf_tim_loginInfo');
    if (loginInfoStorage) {
      const parsedStorage = JSON.parse(loginInfoStorage);
      setLoginInfoState('loginMethod', parsedStorage.loginMethod);
      setLoginInfoState('expires', parsedStorage.expires);
      setLoginInfoState('loginToken', parsedStorage.loginToken);
      setLoginInfoState('signature', parsedStorage.signature);
      setLoginInfoState('jwt', parsedStorage.jwt);
      setLoginInfoDone(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('nf_tim_account', JSON.stringify(accountSnap));
  }, [accountSnap.address, accountSnap.nonce, accountSnap.balance]);

  useEffect(() => {
    localStorage.setItem('nf_tim_loginInfo', JSON.stringify(loginInfoSnap));
  }, [
    loginInfoSnap.loginMethod,
    loginInfoSnap.expires,
    loginInfoSnap.loginToken,
    loginInfoSnap.signature,
    loginInfoSnap.jwt,
  ]);

  // store access token after it has been fetched
  useEffect(() => {
    if (accessTokenData?.data) {
      setLoginInfoState('jwt', accessTokenData?.data);
    }
  }, [accessTokenData]);

  // Proxy provider sync
  useEffect(() => {
    const askForApiNetworkProvider = async () => {
      let apiNetworkProvider = apiNetworkProviderRef?.current;
      if (!apiNetworkProvider) {
        const publicApiEndpoint = 'https://api.elrond.com';
        if (publicApiEndpoint) {
          apiNetworkProvider = new ApiNetworkProvider(publicApiEndpoint, {
            timeout: Number(networkConfig[chainType].apiTimeout),
          });
          apiNetworkProviderRef.current = apiNetworkProvider;
          network.setNetworkState('apiNetworkProvider', apiNetworkProvider);
        } else {
          throw Error(
            'There is no public api configured! Check env vars and README file.'
          );
        }
      }
    };
    askForApiNetworkProvider();
  }, []);

  // Dapp Providers sync
  // Each provider has a little bit different logic on sync
  useEffectOnlyOnUpdate(() => {
    const askForDappProvider = async () => {
      const loginMethod = loginInfoSnap.loginMethod;

      let dappProvider = dappProviderRef?.current;

      const loginExpires = loginInfoSnap.expires;
      const accessTokenExpires = loginInfoSnap?.jwt?.expiresAt;
      const loginExpired = loginExpires && isLoginExpired(loginExpires);
      const accessTokenExpired =
        accessTokenExpires && isLoginExpired(accessTokenExpires);
      if (loginExpired || accessTokenExpired) {
        return;
      }

      if (!dappProvider) {
        switch (loginMethod) {
          // Browser extension auth (Maiar defi wallet)
          case LoginMethodsEnum.extension:
            dappProvider = ExtensionProvider.getInstance();
            try {
              const isSuccessfullyInitialized: boolean =
                await dappProvider.init();
              dappProvider.setAddress(accountSnap.address);

              if (!isSuccessfullyInitialized) {
                console.warn(
                  'Something went wrong trying to redirect to wallet login..'
                );
                return;
              }
              network.setNetworkState('dappProvider', dappProvider);
            } catch (e) {
              console.warn("Can't initialize the Dapp Provider!");
            }
            break;
          // Maiar mobile app auth
          case LoginMethodsEnum.walletconnect:
            const providerHandlers = {
              onClientLogin: () =>
                WcOnLogin(
                  apiNetworkProviderRef?.current,
                  dappProviderRef?.current as WalletConnectProvider
                ),
              onClientLogout: () =>
                logout({ dappProvider: dappProviderRef?.current }),
            };

            const bridgeAddress = getBridgeAddressFromNetwork(
              networkConfig[chainType].walletConnectBridgeAddresses
            );
            dappProvider = new WalletConnectProvider(
              bridgeAddress,
              providerHandlers
            );
            dappProviderRef.current = dappProvider;
            network.setNetworkState('dappProvider', dappProvider);
            try {
              await dappProvider.init();
            } catch {
              console.warn("Can't initialize the Dapp Provider!");
            }
            break;
          // Web wallet auth
          case LoginMethodsEnum.wallet:
            const address = getParamFromUrl('address') || accountSnap?.address;
            const signature = getParamFromUrl('signature');
            if (signature) {
              setLoginInfoState('signature', signature);
            }
            if (address) {
              dappProvider = new WalletProvider(
                `${networkConfig[chainType].walletAddress}${DAPP_INIT_ROUTE}`
              );
              dappProviderRef.current = dappProvider;
              network.setNetworkState('dappProvider', dappProvider);
              const userAddressInstance = new Address(address);
              const userAccountInstance = new Account(userAddressInstance);
              setAccountState('address', userAccountInstance.address.bech32());
            }
            break;
          case LoginMethodsEnum.ledger:
            // TODO: implement the ledger auth
            break;
        }
      }
    };
    askForDappProvider();
  }, [accountDone, loginInfoDone]);

  // Account network sync
  useEffectOnlyOnUpdate(() => {
    const askForAccount = async () => {
      const address = accountSnap?.address;
      const loginExpires = loginInfoSnap.expires;
      const apiNetworkProvider = apiNetworkProviderRef.current;
      const loginExpired = loginExpires && isLoginExpired(loginExpires);
      const accessTokenExpires = loginInfoSnap?.jwt?.expiresAt;
      const accessTokenExpired =
        accessTokenExpires && isLoginExpired(accessTokenExpires);

      if (
        !accessTokenExpired &&
        !loginExpired &&
        address &&
        apiNetworkProvider
      ) {
        const userAddressInstance = new Address(address);
        const userAccountInstance = new Account(userAddressInstance);
        try {
          const userAccountOnNetwork = await apiNetworkProvider.getAccount(
            userAddressInstance
          );
          userAccountInstance.update(userAccountOnNetwork);
          setAccountState('nonce', userAccountInstance.nonce.valueOf());
          setAccountState('balance', userAccountInstance.balance.toString());
          setLoggingInState('loggedIn', Boolean(address));
        } catch (e: any) {
          console.warn(
            `Something went wrong trying to synchronize the user account: ${e?.message}`
          );
        }
      }

      setLoggingInState('pending', false);
    };
    askForAccount();
  }, [accountSnap?.address, loginInfoSnap.jwt]);

  // log out whenever one of the tokens is expired
  useEffect(() => {
    const loginExpires = loginInfoSnap.expires;
    const accessTokenExpires = loginInfoSnap?.jwt?.expiresAt;
    if (
      (loginExpires && isLoginExpired(loginExpires)) ||
      (accessTokenExpires && isLoginExpired(accessTokenExpires))
    ) {
      clearAuthStates();
      network.clearDappProvider();
      localStorage.clear();
    }
  });
};
