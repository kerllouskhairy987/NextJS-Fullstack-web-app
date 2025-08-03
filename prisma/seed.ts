import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    // Generate Fake Data For Todos
    await prisma.todo.createMany({
        data: Array.from({ length: 25 }, () => (
            {
                title: faker.lorem.sentence({ min: 3, max: 5 }),
                body: faker.lorem.paragraph({ min: 1, max: 20 }),
            }
        ))
    })

    // Generate Fake Data For Users
    // await prisma.user.createMany({
    //     data: Array.from({ length: 25 }, () => (
    //         {
    //             email: faker.internet.email(),
    //             name: faker.internet.username(),
    //             address: {
    //                 street: faker.location.streetAddress(),
    //                 city: faker.location.city(),
    //                 state: faker.location.state(),
    //                 zip: faker.location.zipCode()
    //             },
    //         }
    //     ))
    // })
}

main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })