import { orderSchema } from './orderSchema.js'
import { z } from 'zod'

/**
 * @description successful operation
 */
export const placeOrder200Schema = z.lazy(() => orderSchema)

/**
 * @description Invalid input
 */
export const placeOrder405Schema = z.any()

export const placeOrderMutationRequestSchema = z.lazy(() => orderSchema)

export const placeOrderMutationResponseSchema = z.lazy(() => placeOrder200Schema)
