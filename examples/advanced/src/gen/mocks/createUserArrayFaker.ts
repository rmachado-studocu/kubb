import type { UserArray } from '../models/ts/UserArray.ts'
import { createUserFaker } from './createUserFaker.ts'
import { faker } from '@faker-js/faker'

export function createUserArrayFaker(data?: UserArray): UserArray {
  return [...faker.helpers.multiple(() => createUserFaker()), ...(data || [])]
}
