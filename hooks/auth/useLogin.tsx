import { useWebWalletLogin } from './useWebWalletLogin';
import { useExtensionLogin } from './useExtensionLogin';
import { useMobileAppLogin } from './useMobileAppLogin';
import { Login } from '../../types/account';
import { LoginMethodsEnum } from '../../types/enums';

export const useLogin = (params?: Login) => {
  const {
    login: webLogin,
    isLoggedIn: webIsLoggedIn,
    isLoggingIn: webIsLoggingIn,
    error: webLoginError,
  } = useWebWalletLogin(params);

  const {
    login: mobileLogin,
    isLoggedIn: mobileIsLoggedIn,
    isLoggingIn: mobileIsLoggingIn,
    walletConnectUri,
    error: mobileLoginError,
  } = useMobileAppLogin(params);

  const {
    login: extensionLogin,
    isLoggedIn: extensionIsLoggedIn,
    isLoggingIn: extensionIsLoggingIn,
    error: extensionLoginError,
  } = useExtensionLogin(params);

  const login = async (type: LoginMethodsEnum) => {
    if (type === LoginMethodsEnum.extension) {
      await extensionLogin();
    }
    if (type === LoginMethodsEnum.wallet) {
      await webLogin();
    }
    if (type === LoginMethodsEnum.walletconnect) {
      await mobileLogin();
    }
    return null;
  };

  return {
    walletConnectUri,
    login,
    isLoggedIn: webIsLoggedIn || mobileIsLoggedIn || extensionIsLoggedIn,
    isLoggingIn: webIsLoggingIn || mobileIsLoggingIn || extensionIsLoggingIn,
    error: webLoginError || mobileLoginError || extensionLoginError,
  };
};
