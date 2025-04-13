/**
* Generated by Kubb (https://kubb.dev/).
* Do not edit manually.
* Source: petStore.yaml

* Title: Swagger Petstore - OpenAPI 3.0

* Description: This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
* Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
* You can now help us improve the API whether it's by making changes to the definition itself or to the code.
* That way, with time, we can improve the API in general, and expose some of the new features in OAS3.
* 
* Some useful links:
* - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
* - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)

* OpenAPI spec version: 1.0.11
*/

import client from '@kubb/plugin-client/clients/axios'
import type { DeleteOrderMutationResponse, DeleteOrderPathParams, DeleteOrder400, DeleteOrder404 } from '../models/DeleteOrder.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { CreateMutationOptions, QueryClient } from '@tanstack/svelte-query'
import { createMutation } from '@tanstack/svelte-query'

export const deleteOrderMutationKey = () => [{ url: '/store/order/{orderId}' }] as const

export type DeleteOrderMutationKey = ReturnType<typeof deleteOrderMutationKey>

/**
 * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 * {@link /store/order/:orderId}
 */
export async function deleteOrder(orderId: DeleteOrderPathParams['orderId'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<DeleteOrderMutationResponse, ResponseErrorConfig<DeleteOrder400 | DeleteOrder404>, unknown>({
    method: 'DELETE',
    url: `/store/order/${orderId}`,
    ...requestConfig,
  })
  return res.data
}

/**
 * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 * {@link /store/order/:orderId}
 */
export function createDeleteOrder<TContext>(
  options: {
    mutation?: CreateMutationOptions<
      DeleteOrderMutationResponse,
      ResponseErrorConfig<DeleteOrder400 | DeleteOrder404>,
      { orderId: DeleteOrderPathParams['orderId'] },
      TContext
    > & { client?: QueryClient }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const {
    mutation: { client: queryClient, ...mutationOptions } = {},
    client: config = {},
  } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? deleteOrderMutationKey()

  return createMutation<
    DeleteOrderMutationResponse,
    ResponseErrorConfig<DeleteOrder400 | DeleteOrder404>,
    { orderId: DeleteOrderPathParams['orderId'] },
    TContext
  >(
    {
      mutationFn: async ({ orderId }) => {
        return deleteOrder(orderId, config)
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  )
}
