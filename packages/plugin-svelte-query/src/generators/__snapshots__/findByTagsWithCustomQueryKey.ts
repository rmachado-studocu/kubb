import client from '@kubb/plugin-client/clients/axios'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, CreateBaseQueryOptions, CreateQueryResult } from '@tanstack/react-query'
import { queryOptions, createQuery } from '@tanstack/react-query'

export const findPetsByTagsQueryKey = (params?: FindPetsByTagsQueryParams) => ['test', { url: '/pet/findByTags' }, ...(params ? [params] : [])] as const

export type FindPetsByTagsQueryKey = ReturnType<typeof findPetsByTagsQueryKey>

/**
 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 * {@link /pet/findByTags}
 */
export async function findPetsByTags(
  headers: FindPetsByTagsHeaderParams,
  params?: FindPetsByTagsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<FindPetsByTagsQueryResponse, ResponseErrorConfig<FindPetsByTags400>, unknown>({
    method: 'GET',
    url: `/pet/findByTags`,
    params,
    ...requestConfig,
    headers: { ...headers, ...requestConfig.headers },
  })
  return findPetsByTagsQueryResponse.parse(res.data)
}

export function findPetsByTagsQueryOptions(
  headers: FindPetsByTagsHeaderParams,
  params?: FindPetsByTagsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = findPetsByTagsQueryKey(params)
  return queryOptions<FindPetsByTagsQueryResponse, ResponseErrorConfig<FindPetsByTags400>, FindPetsByTagsQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return findPetsByTags(headers, params, config)
    },
  })
}

/**
 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 * {@link /pet/findByTags}
 */
export function createFindPetsByTags<
  TData = FindPetsByTagsQueryResponse,
  TQueryData = FindPetsByTagsQueryResponse,
  TQueryKey extends QueryKey = FindPetsByTagsQueryKey,
>(
  headers: FindPetsByTagsHeaderParams,
  params?: FindPetsByTagsQueryParams,
  options: {
    query?: Partial<CreateBaseQueryOptions<FindPetsByTagsQueryResponse, ResponseErrorConfig<FindPetsByTags400>, TData, TQueryData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? findPetsByTagsQueryKey(params)

  const query = createQuery(
    {
      ...(findPetsByTagsQueryOptions(headers, params, config) as unknown as CreateBaseQueryOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<CreateBaseQueryOptions, 'queryKey'>),
    },
    queryClient,
  ) as CreateQueryResult<TData, ResponseErrorConfig<FindPetsByTags400>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}
