import { useSnapshot } from 'valtio';
import { loginInfoState } from '../../store/auth';

export const useLoginInfo = () => {
  const loginInfoSnap = useSnapshot(loginInfoState);

  return {
    loginMethod: loginInfoSnap.loginMethod,
    expires: loginInfoSnap.expires,
    loginToken: loginInfoSnap.loginToken,
    signature: loginInfoSnap.signature,
    jwt: loginInfoSnap.jwt,
  };
};
