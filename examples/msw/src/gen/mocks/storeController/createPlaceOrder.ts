/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { PlaceOrderMutationResponse } from '../../models/PlaceOrder.ts'
import { createOrder } from '../createOrder.ts'
import { faker } from '@faker-js/faker'

/**
 * @description successful operation
 */
export function createPlaceOrder200() {
  faker.seed([220])
  return createOrder()
}

/**
 * @description Invalid input
 */
export function createPlaceOrder405() {
  faker.seed([220])
  return undefined
}

export function createPlaceOrderMutationRequest() {
  faker.seed([220])
  return createOrder()
}

export function createPlaceOrderMutationResponse(data?: Partial<PlaceOrderMutationResponse>): PlaceOrderMutationResponse {
  faker.seed([220])
  return data || faker.helpers.arrayElement<any>([createPlaceOrder200()])
}
