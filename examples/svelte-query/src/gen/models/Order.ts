/**
* Generated by Kubb (https://kubb.dev/).
* Do not edit manually.
* Source: petStore.yaml

* Title: Swagger Petstore - OpenAPI 3.0

* Description: This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
* Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
* You can now help us improve the API whether it's by making changes to the definition itself or to the code.
* That way, with time, we can improve the API in general, and expose some of the new features in OAS3.
* 
* Some useful links:
* - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
* - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)

* OpenAPI spec version: 1.0.11
*/

export const orderStatusEnum = {
  placed: 'placed',
  approved: 'approved',
  delivered: 'delivered',
} as const

export type OrderStatusEnum = (typeof orderStatusEnum)[keyof typeof orderStatusEnum]

export const orderHttpStatusEnum = {
  '200': 200,
  '400': 400,
  '500': 500,
} as const

export type OrderHttpStatusEnum = (typeof orderHttpStatusEnum)[keyof typeof orderHttpStatusEnum]

export type Order = {
  /**
   * @type integer | undefined, int64
   */
  id?: number
  /**
   * @type integer | undefined, int64
   */
  petId?: number
  /**
   * @type integer | undefined, int32
   */
  quantity?: number
  /**
   * @type string | undefined, date-time
   */
  shipDate?: string
  /**
   * @description Order Status
   * @type string | undefined
   */
  status?: OrderStatusEnum
  /**
   * @description HTTP Status
   * @type number | undefined
   */
  http_status?: OrderHttpStatusEnum
  /**
   * @type boolean | undefined
   */
  complete?: boolean
}
