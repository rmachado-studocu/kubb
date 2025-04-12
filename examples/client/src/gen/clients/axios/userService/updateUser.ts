/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/clients/axios'
import type { UpdateUserMutationRequest, UpdateUserMutationResponse, UpdateUserPathParams } from '../../../models/ts/userController/UpdateUser.js'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

function getUpdateUserUrl({ username }: { username: UpdateUserPathParams['username'] }) {
  return `/user/${username}` as const
}

/**
 * @description This can only be done by the logged in user.
 * @summary Update user
 * {@link /user/:username}
 */
export async function updateUser(
  { username }: { username: UpdateUserPathParams['username'] },
  data?: UpdateUserMutationRequest,
  config: Partial<RequestConfig<UpdateUserMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<UpdateUserMutationResponse, ResponseErrorConfig<Error>, UpdateUserMutationRequest>({
    method: 'PUT',
    url: getUpdateUserUrl({ username }).toString(),
    data,
    ...requestConfig,
  })
  return res.data
}
