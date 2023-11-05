import {
  MutationOptions,
  QueryKey,
  UseQueryOptions,
} from '@tanstack/react-query';

export type OmittedQueryOptions<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends QueryKey,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'queryKey' | 'queryFn'
>;

export type OmittedMutationOptions<TData, TError, TVariables, TContext> = Omit<
  MutationOptions<TData, TError, TVariables, TContext>,
  'queryKey' | 'queryFn'
>;
