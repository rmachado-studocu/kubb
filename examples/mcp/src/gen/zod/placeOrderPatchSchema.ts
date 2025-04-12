import { orderSchema } from './orderSchema.js'
import { z } from 'zod'

/**
 * @description successful operation
 */
export const placeOrderPatch200Schema = z.lazy(() => orderSchema)

/**
 * @description Invalid input
 */
export const placeOrderPatch405Schema = z.any()

export const placeOrderPatchMutationRequestSchema = z.lazy(() => orderSchema)

export const placeOrderPatchMutationResponseSchema = z.lazy(() => placeOrderPatch200Schema)
