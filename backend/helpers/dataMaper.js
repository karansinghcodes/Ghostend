import { faker } from "@faker-js/faker"

export const DataTypeMaper = {
    username: () => faker.internet.username(),
    phonenumber: () => faker.phone.number(),
    boolean: () => faker.datatype.boolean(),
    number: () => faker.number.int({ min: 1, max: 100 }),
    string: () => faker.lorem.word(),
    date: () => faker.date.anytime(),
    email: () => faker.internet.email(),
    firstname: () => faker.person.firstName(),
    lastname: () => faker.person.lastName(),
    name: () => `${faker.person.firstName()} ${faker.person.lastName}`,
    id: () => faker.string.uuid(),
    image: () => faker.image.url(),
    sentence: () => faker.lorem.sentence(),
    paragraph: (count) => faker.lorem.paragraph(count),
    job: () => faker.person.jobTitle(),
    address: () => faker.location.streetAddress(),
    city: () => faker.location.city(),
    country: () => faker.location.country(),
    currency: () => faker.finance.currency(),
    price: () => faker.commerce.price(),
    color: () => faker.color.rgb(),

}

