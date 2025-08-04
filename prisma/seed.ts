import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // await prisma.todo.createMany({
    //     data: Array.from({ length: 50 }).map(() => ({
    //         user_id: 'user_30lzwdxK5nXfViu5Ch0etmKAbJI',
    //         title: faker.lorem.sentence(),
    //         body: faker.lorem.sentence(),
    //     }))
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