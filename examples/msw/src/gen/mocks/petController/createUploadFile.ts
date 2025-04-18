/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { UploadFilePathParams, UploadFileQueryParams, UploadFileMutationResponse } from '../../models/UploadFile.ts'
import { createApiResponse } from '../createApiResponse.ts'
import { faker } from '@faker-js/faker'

export function createUploadFilePathParams(data?: Partial<UploadFilePathParams>): UploadFilePathParams {
  faker.seed([220])
  return {
    ...{ petId: faker.number.int() },
    ...(data || {}),
  }
}

export function createUploadFileQueryParams(data?: Partial<UploadFileQueryParams>): UploadFileQueryParams {
  faker.seed([220])
  return {
    ...{ additionalMetadata: faker.string.alpha() },
    ...(data || {}),
  }
}

/**
 * @description successful operation
 */
export function createUploadFile200() {
  faker.seed([220])
  return createApiResponse()
}

export function createUploadFileMutationRequest() {
  faker.seed([220])
  return faker.image.url() as unknown as Blob
}

export function createUploadFileMutationResponse(data?: Partial<UploadFileMutationResponse>): UploadFileMutationResponse {
  faker.seed([220])
  return data || faker.helpers.arrayElement<any>([createUploadFile200()])
}
