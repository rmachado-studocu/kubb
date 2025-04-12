import { petSchema } from './petSchema.js'
import { z } from 'zod'

/**
 * @description Successful operation
 */
export const updatePet200Schema = z.lazy(() => petSchema)

/**
 * @description Invalid ID supplied
 */
export const updatePet400Schema = z.any()

/**
 * @description Pet not found
 */
export const updatePet404Schema = z.any()

/**
 * @description Validation exception
 */
export const updatePet405Schema = z.any()

/**
 * @description Update an existent pet in the store
 */
export const updatePetMutationRequestSchema = z.lazy(() => petSchema)

export const updatePetMutationResponseSchema = z.lazy(() => updatePet200Schema)
