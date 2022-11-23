import { useSnapshot } from 'valtio';
import { accountState } from '../../store/auth';

export const useAccount = () => {
  const account = useSnapshot(accountState);

  return account;
};
