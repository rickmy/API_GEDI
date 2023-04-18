import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function roleSeed() {
    const admin = await prisma.role.upsert({
        where: { name: 'ADMIN' },
        update: {},
        create: {
            name: 'ADMIN',
        },
    })
    const teacher = await prisma.role.upsert({
        where: { name: 'TEACHER' },
        update: {},
        create: {
            name: 'TEACHER',
        },
    })
    const headmaster = await prisma.role.upsert({
        where: { name: 'HEADMASTER' },
        update: {},
        create: {
            name: 'HEADMASTER',
        },
    })
    const student = await prisma.role.upsert({
        where: { name: 'STUDENT' },
        update: {},
        create: {
            name: 'STUDENT',
        },
    })
    const coordinator = await prisma.role.upsert({
        where: { name: 'COORDINATOR' },
        update: {},
        create: {
            name: 'COORDINATOR',
        },
    })
    const secretary = await prisma.role.upsert({
        where: { name: 'SECRETARY' },
        update: {},
        create: {
            name: 'SECRETARY',
        },
    })
}
export default roleSeed;