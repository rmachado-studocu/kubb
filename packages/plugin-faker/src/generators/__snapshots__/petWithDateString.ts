import { faker } from '@faker-js/faker'

export function pet(data?: Partial<Pet>): Pet {
  return {
    ...{
      id: faker.number.int(),
      name: faker.string.alpha(),
      tag: faker.string.alpha(),
      code: faker.helpers.fromRegExp(new RegExp('\\b[1-9]\\b')),
      shipDate: faker.date.anytime().toISOString().substring(0, 10),
      shipTime: faker.date.anytime().toISOString().substring(11, 19),
    },
    ...(data || {}),
  }
}
