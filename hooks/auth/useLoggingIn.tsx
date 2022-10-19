import { useSnapshot } from 'valtio';
import { loggingInState } from '../../store/auth';

export const useLoggingIn = () => {
  const loggingInSnap = useSnapshot(loggingInState);

  return {
    isLoggingIn: loggingInSnap.pending,
    error: loggingInSnap.error,
    isLoggedIn: loggingInSnap.loggedIn,
  };
};
