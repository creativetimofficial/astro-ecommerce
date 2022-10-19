import useSWR, { Fetcher } from 'swr';
import { apiCall } from '../../utils/apiCall';

export enum ApiQueryType {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

interface ApiQueryData {
  path: string;
  type: ApiQueryType;
  headers?: Record<string, unknown>;
  payload?: Record<string, unknown>;
  options?: Record<string, unknown>;
  autoInit?: boolean;
}

type FetcherArgs = Pick<ApiQueryData, 'path' | 'type' | 'payload' | 'headers'>;

export interface ApiOutput<T = Record<string, unknown>> {
  data: T;
  error?: string;
}

export const fetcher: Fetcher<ApiOutput, FetcherArgs> = async ({
  path,
  type,
  payload,
  headers,
}) => {
  const options = {
    ...(headers && { headers }),
  };
  if (payload) {
    return await apiCall[type](path, payload, options);
  } else return await apiCall[type](path, options);
};

export const useApiQuery = ({
  path,
  type,
  payload,
  options,
  headers,
  autoInit = true,
}: ApiQueryData) => {
  const { data, error, mutate } = useSWR(
    autoInit ? { path, type, payload, headers } : null,
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      ...options,
    }
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
};
