import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import * as remote from '../../remotes';
import { GetFormResponse } from '../../remotes/interface';
import { OmittedQueryOptions } from './interface';

export const useGetForm = (
  id: string,
  options?: OmittedQueryOptions<
    unknown,
    AxiosError<unknown>,
    GetFormResponse,
    ['useGetForm', string]
  >,
) => {
  return useQuery({
    ...options,
    queryFn: () => remote.getForm(id),
    queryKey: ['useGetForm', id],
  });
};
