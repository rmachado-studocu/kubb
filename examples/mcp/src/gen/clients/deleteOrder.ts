import client from '@kubb/plugin-client/clients/axios'
import type { DeleteOrderMutationResponse, DeleteOrderPathParams, DeleteOrder400, DeleteOrder404 } from '../models/ts/DeleteOrder.js'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

function getDeleteOrderUrl(orderId: DeleteOrderPathParams['orderId']) {
  return `https://petstore.swagger.io/v2/store/order/${orderId}` as const
}

/**
 * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 * {@link /store/order/:orderId}
 */
export async function deleteOrder(orderId: DeleteOrderPathParams['orderId'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<DeleteOrderMutationResponse, ResponseErrorConfig<DeleteOrder400 | DeleteOrder404>, unknown>({
    method: 'DELETE',
    url: getDeleteOrderUrl(orderId).toString(),
    ...requestConfig,
  })
  return res.data
}
