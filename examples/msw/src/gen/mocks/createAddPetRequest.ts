/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { AddPetRequest } from '../models/AddPetRequest.ts'
import { createCategory } from './createCategory.ts'
import { createTag } from './createTag.ts'
import { faker } from '@faker-js/faker'

export function createAddPetRequest(data?: Partial<AddPetRequest>): AddPetRequest {
  faker.seed([220])
  return {
    ...{
      id: faker.number.int(),
      name: faker.string.alpha(),
      category: createCategory(),
      photoUrls: faker.helpers.multiple(() => faker.string.alpha()),
      tags: faker.helpers.multiple(() => createTag()),
      status: faker.helpers.arrayElement<NonNullable<AddPetRequest>['status']>(['available', 'pending', 'sold']),
    },
    ...(data || {}),
  }
}
