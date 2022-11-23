/* eslint-disable react-hooks/exhaustive-deps */
import { Account, Address } from '@elrondnetwork/erdjs';
import { ApiNetworkProvider } from '@elrondnetwork/erdjs-network-providers';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { useState, useRef } from 'react';
import { networkConfig, chainType } from '../../config/network';
import { LoginMethodsEnum } from '../../types/enums';
import {
  setAccountState,
  setLoggingInState,
  setLoginInfoState,
} from '../../store/auth';
import { getNetworkState, setNetworkState } from '../../store/network';
import { getBridgeAddressFromNetwork } from '../../utils/bridgeAddress';
import { getNewLoginExpiresTimestamp } from '../../utils/expiresAt';
import { WcOnLogin } from '../../utils/walletConnectCbs';
import { useLogout } from './useLogout';
import { Login } from '../../types/account';
import { useLoggingIn } from './useLoggingIn';
import { DappProvider } from '../../types/network';

export const useMobileAppLogin = (params?: Login) => {
  const { logout } = useLogout();
  const { isLoggedIn, isLoggingIn, error } = useLoggingIn();
  const [walletConnectUri, setWalletConnectUri] = useState('');

  const apiNetworkProvider =
    getNetworkState<ApiNetworkProvider>('apiNetworkProvider');
  const dappProvider = getNetworkState<WalletConnectProvider>('dappProvider');

  const dappProviderRef = useRef<DappProvider>(dappProvider);

  const handleOnLogout = () => {
    logout({
      callbackRoute: params?.callbackRoute,
      dappProvider: dappProviderRef?.current,
    });
  };

  const login = async () => {
    const bridgeAddress = getBridgeAddressFromNetwork(
      networkConfig[chainType].walletConnectBridgeAddresses
    );

    if (!bridgeAddress || !apiNetworkProvider) {
      throw Error(
        "Something wen't wrong with the initialization (ApiNetworkProvider or Wallet Connect Bridge address), plese try to refresh the page!"
      );
    }

    const providerHandlers = {
      onClientLogin: async () => {
        if (dappProviderRef.current instanceof WalletConnectProvider) {
          const address = await dappProviderRef.current.getAddress();
          const signature = await dappProviderRef.current.getSignature();
          const account = new Account(new Address(address));

          setAccountState('address', address);
          setAccountState('balance', account.balance.toString());
          setAccountState('nonce', account.nonce.valueOf());

          setLoggingInState('loggedIn', Boolean(address));
          if (signature) {
            setLoginInfoState('signature', signature);
          }
          if (params?.token) {
            setLoginInfoState('loginToken', params?.token);
          }

          setNetworkState('dappProvider', dappProviderRef.current);

          WcOnLogin(
            apiNetworkProvider,
            dappProviderRef.current,
            params?.callbackRoute
          );
        }
      },
      onClientLogout: handleOnLogout,
    };

    const providerInstance = new WalletConnectProvider(
      bridgeAddress,
      providerHandlers
    );

    try {
      const walletConnectUri: string | undefined =
        await providerInstance.login();
      dappProviderRef.current = providerInstance;

      setLoginInfoState('expires', getNewLoginExpiresTimestamp());
      setLoginInfoState('loginMethod', LoginMethodsEnum.walletconnect);

      generateWcUri(bridgeAddress, walletConnectUri);
      setLoggingInState('pending', true);
    } catch (e: any) {
      setLoggingInState('error', `Error logging in ${e?.message}`);
    } finally {
      setLoggingInState('pending', false);
    }
  };

  const generateWcUri = (bridgeAddress: string, walletConnectUri: string) => {
    if (!bridgeAddress) return;

    const hasUri = Boolean(walletConnectUri);

    if (!hasUri) return;

    if (!params?.token) {
      setWalletConnectUri(walletConnectUri);
    } else {
      const wcUriWithToken = `${walletConnectUri}&token=${params.token}`;
      setWalletConnectUri(wcUriWithToken);
    }
  };

  return {
    login,
    walletConnectUri,
    isLoggedIn,
    isLoggingIn,
    error,
    logout,
  };
};
