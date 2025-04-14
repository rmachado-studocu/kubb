/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { addFilesHandler } from './addFiles.js'
import { addPetHandler } from './addPet.js'
import { createPetsHandler } from './createPets.js'
import { createUserHandler } from './createUser.js'
import { createUsersWithListInputHandler } from './createUsersWithListInput.js'
import { deleteOrderHandler } from './deleteOrder.js'
import { deletePetHandler } from './deletePet.js'
import { deleteUserHandler } from './deleteUser.js'
import { findPetsByStatusHandler } from './findPetsByStatus.js'
import { findPetsByTagsHandler } from './findPetsByTags.js'
import { getInventoryHandler } from './getInventory.js'
import { getOrderByIdHandler } from './getOrderById.js'
import { getPetByIdHandler } from './getPetById.js'
import { getUserByNameHandler } from './getUserByName.js'
import { loginUserHandler } from './loginUser.js'
import { logoutUserHandler } from './logoutUser.js'
import { placeOrderHandler } from './placeOrder.js'
import { placeOrderPatchHandler } from './placeOrderPatch.js'
import { updatePetHandler } from './updatePet.js'
import { updatePetWithFormHandler } from './updatePetWithForm.js'
import { updateUserHandler } from './updateUser.js'
import { addFilesMutationRequestSchema } from '../zod/addFilesSchema.js'
import { addPetMutationRequestSchema } from '../zod/addPetSchema.js'
import {
  createPetsMutationRequestSchema,
  createPetsPathParamsSchema,
  createPetsQueryParamsSchema,
  createPetsHeaderParamsSchema,
} from '../zod/createPetsSchema.js'
import { createUserMutationRequestSchema } from '../zod/createUserSchema.js'
import { createUsersWithListInputMutationRequestSchema } from '../zod/createUsersWithListInputSchema.js'
import { deleteOrderPathParamsSchema } from '../zod/deleteOrderSchema.js'
import { deletePetPathParamsSchema, deletePetHeaderParamsSchema } from '../zod/deletePetSchema.js'
import { deleteUserPathParamsSchema } from '../zod/deleteUserSchema.js'
import { findPetsByStatusPathParamsSchema } from '../zod/findPetsByStatusSchema.js'
import { findPetsByTagsQueryParamsSchema, findPetsByTagsHeaderParamsSchema } from '../zod/findPetsByTagsSchema.js'
import { getOrderByIdPathParamsSchema } from '../zod/getOrderByIdSchema.js'
import { getPetByIdPathParamsSchema } from '../zod/getPetByIdSchema.js'
import { getUserByNamePathParamsSchema } from '../zod/getUserByNameSchema.js'
import { loginUserQueryParamsSchema } from '../zod/loginUserSchema.js'
import { placeOrderPatchMutationRequestSchema } from '../zod/placeOrderPatchSchema.js'
import { placeOrderMutationRequestSchema } from '../zod/placeOrderSchema.js'
import { updatePetMutationRequestSchema } from '../zod/updatePetSchema.js'
import { updatePetWithFormPathParamsSchema, updatePetWithFormQueryParamsSchema } from '../zod/updatePetWithFormSchema.js'
import { updateUserMutationRequestSchema, updateUserPathParamsSchema } from '../zod/updateUserSchema.js'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio'

export const server = new McpServer({
  name: 'Swagger Petstore - OpenAPI 3.0',
  version: '3.0.3',
})

server.tool(
  'createPets',
  '',
  {
    uuid: createPetsPathParamsSchema.shape['uuid'],
    data: createPetsMutationRequestSchema,
    headers: createPetsHeaderParamsSchema,
    params: createPetsQueryParamsSchema,
  },
  async ({ uuid, data, headers, params }) => {
    return createPetsHandler({ uuid, data, headers, params })
  },
)

server.tool('updatePet', 'Update an existing pet by Id', { data: updatePetMutationRequestSchema }, async ({ data }) => {
  return updatePetHandler({ data })
})

server.tool('addPet', 'Add a new pet to the store', { data: addPetMutationRequestSchema }, async ({ data }) => {
  return addPetHandler({ data })
})

server.tool(
  'findPetsByStatus',
  'Multiple status values can be provided with comma separated strings',
  { stepId: findPetsByStatusPathParamsSchema.shape['step_id'] },
  async ({ stepId }) => {
    return findPetsByStatusHandler({ stepId })
  },
)

server.tool(
  'findPetsByTags',
  'Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
  { headers: findPetsByTagsHeaderParamsSchema, params: findPetsByTagsQueryParamsSchema },
  async ({ headers, params }) => {
    return findPetsByTagsHandler({ headers, params })
  },
)

server.tool('getPetById', 'Returns a single pet', { petId: getPetByIdPathParamsSchema.shape['petId'] }, async ({ petId }) => {
  return getPetByIdHandler({ petId })
})

server.tool(
  'updatePetWithForm',
  '',
  { petId: updatePetWithFormPathParamsSchema.shape['petId'], params: updatePetWithFormQueryParamsSchema },
  async ({ petId, params }) => {
    return updatePetWithFormHandler({ petId, params })
  },
)

server.tool(
  'deletePet',
  'delete a pet',
  { petId: deletePetPathParamsSchema.shape['petId'], headers: deletePetHeaderParamsSchema },
  async ({ petId, headers }) => {
    return deletePetHandler({ petId, headers })
  },
)

server.tool('addFiles', 'Place a new file in the store', { data: addFilesMutationRequestSchema }, async ({ data }) => {
  return addFilesHandler({ data })
})

server.tool('getInventory', 'Returns a map of status codes to quantities', async () => {
  return getInventoryHandler()
})

server.tool('placeOrder', 'Place a new order in the store', { data: placeOrderMutationRequestSchema }, async ({ data }) => {
  return placeOrderHandler({ data })
})

server.tool('placeOrderPatch', 'Place a new order in the store with patch', { data: placeOrderPatchMutationRequestSchema }, async ({ data }) => {
  return placeOrderPatchHandler({ data })
})

server.tool(
  'getOrderById',
  'For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.',
  { orderId: getOrderByIdPathParamsSchema.shape['orderId'] },
  async ({ orderId }) => {
    return getOrderByIdHandler({ orderId })
  },
)

server.tool(
  'deleteOrder',
  'For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors',
  { orderId: deleteOrderPathParamsSchema.shape['orderId'] },
  async ({ orderId }) => {
    return deleteOrderHandler({ orderId })
  },
)

server.tool('createUser', 'This can only be done by the logged in user.', { data: createUserMutationRequestSchema }, async ({ data }) => {
  return createUserHandler({ data })
})

server.tool(
  'createUsersWithListInput',
  'Creates list of users with given input array',
  { data: createUsersWithListInputMutationRequestSchema },
  async ({ data }) => {
    return createUsersWithListInputHandler({ data })
  },
)

server.tool('loginUser', '', { params: loginUserQueryParamsSchema }, async ({ params }) => {
  return loginUserHandler({ params })
})

server.tool('logoutUser', '', async () => {
  return logoutUserHandler()
})

server.tool('getUserByName', '', { username: getUserByNamePathParamsSchema.shape['username'] }, async ({ username }) => {
  return getUserByNameHandler({ username })
})

server.tool(
  'updateUser',
  'This can only be done by the logged in user.',
  { username: updateUserPathParamsSchema.shape['username'], data: updateUserMutationRequestSchema },
  async ({ username, data }) => {
    return updateUserHandler({ username, data })
  },
)

server.tool('deleteUser', 'This can only be done by the logged in user.', { username: deleteUserPathParamsSchema.shape['username'] }, async ({ username }) => {
  return deleteUserHandler({ username })
})

async function startServer() {
  try {
    const transport = new StdioServerTransport()
    await server.connect(transport)
    console.error('Server started and listening on stdio')
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
