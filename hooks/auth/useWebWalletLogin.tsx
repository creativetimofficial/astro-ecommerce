import { WalletProvider } from '@elrondnetwork/erdjs-web-wallet-provider';
import { LoginMethodsEnum } from '../../types/enums';
import { getNewLoginExpiresTimestamp } from '../../utils/expiresAt';
import {
  chainType,
  DAPP_INIT_ROUTE,
  networkConfig,
} from '../../config/network';
import { setLoginInfoState, setLoggingInState } from '../../store/auth';
import { useLogout } from './useLogout';
import { Login } from '../../types/account';
import { useLoggingIn } from './useLoggingIn';

export const useWebWalletLogin = (params?: Login) => {
  const { logout } = useLogout();
  const { isLoggedIn, isLoggingIn, error } = useLoggingIn();

  const login = async () => {
    setLoggingInState('pending', true);

    const providerInstance = new WalletProvider(
      `${networkConfig[chainType].walletAddress}${DAPP_INIT_ROUTE}`
    );

    const callbackUrl: string =
      typeof window !== 'undefined'
        ? encodeURIComponent(
            `${window.location.origin}${params?.callbackRoute || '/dashboard'}`
          )
        : '/dashboard';
    const providerLoginData = {
      callbackUrl,
      ...(params?.token && { token: params?.token }),
    };

    try {
      setLoginInfoState('loginMethod', LoginMethodsEnum.wallet);
      await providerInstance.login(providerLoginData);
      setLoginInfoState('expires', getNewLoginExpiresTimestamp());
      if (params?.token) {
        setLoginInfoState('loginToken', params.token);
      }
    } catch (e: any) {
      setLoggingInState('error', `Error logging in ${e?.message}`);
      setLoginInfoState('loginMethod', '');
    } finally {
      setLoggingInState('pending', false);
    }
  };

  return {
    login,
    isLoggedIn,
    isLoggingIn,
    error,
    logout,
  };
};

export default useWebWalletLogin;
