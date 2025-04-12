import { userSchema } from './userSchema.js'
import { z } from 'zod'

export const getUserByNamePathParamsSchema = z.object({
  username: z.string().describe('The name that needs to be fetched. Use user1 for testing. '),
})

/**
 * @description successful operation
 */
export const getUserByName200Schema = z.lazy(() => userSchema)

/**
 * @description Invalid username supplied
 */
export const getUserByName400Schema = z.any()

/**
 * @description User not found
 */
export const getUserByName404Schema = z.any()

export const getUserByNameQueryResponseSchema = z.lazy(() => getUserByName200Schema)
