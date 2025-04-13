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

import type { User } from './User.ts'

export type UpdateUserPathParams = {
  /**
   * @description name that need to be deleted
   * @type string
   */
  username: string
}

/**
 * @description successful operation
 */
export type UpdateUserError = any

/**
 * @description Update an existent user in the store
 */
export type UpdateUserMutationRequest = User

export type UpdateUserMutationResponse = any

export type UpdateUserMutation = {
  Response: any
  Request: UpdateUserMutationRequest
  PathParams: UpdateUserPathParams
  Errors: any
}
