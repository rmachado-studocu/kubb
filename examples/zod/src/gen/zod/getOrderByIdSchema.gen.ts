import { z } from '../../zod.ts'
import { orderSchema } from './orderSchema.gen.ts'

export const getOrderByIdPathParamsSchema = z.object({
  orderId: z.int().describe('ID of order that needs to be fetched'),
})

export type GetOrderByIdPathParamsSchema = z.infer<typeof getOrderByIdPathParamsSchema>

/**
 * @description successful operation
 */
export const getOrderById200Schema = orderSchema

export type GetOrderById200Schema = z.infer<typeof getOrderById200Schema>

/**
 * @description Invalid ID supplied
 */
export const getOrderById400Schema = z.any()

export type GetOrderById400Schema = z.infer<typeof getOrderById400Schema>

/**
 * @description Order not found
 */
export const getOrderById404Schema = z.any()

export type GetOrderById404Schema = z.infer<typeof getOrderById404Schema>

export const getOrderByIdQueryResponseSchema = getOrderById200Schema

export type GetOrderByIdQueryResponseSchema = z.infer<typeof getOrderByIdQueryResponseSchema>
