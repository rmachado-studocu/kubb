import client from '@kubb/plugin-client/clients/axios'
import type { ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { CallToolResult } from '@modelcontextprotocol/sdk/types'

/**
 * @summary List all pets
 * {@link /pets}
 */
export async function listPetsHandler({ params }: { params?: ListPetsQueryParams }): Promise<Promise<CallToolResult>> {
  const res = await client<ListPetsQueryResponse, ResponseErrorConfig<Error>, unknown>({ method: 'GET', url: `/pets`, params })
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(res.data),
      },
    ],
  }
}
