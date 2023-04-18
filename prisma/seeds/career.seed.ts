import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function careerSeed() {
    const DS = await prisma.career.upsert({
        where: { code: 'DS' },
        update: {},
        create: {
          acronym: 'DS',
          name: 'DESARROLLO DE SOFTWARE',
          code: 'DS',
          instituteId: 2,
        },
    });
    const MARKETING = await prisma.career.upsert({
        where: { code: 'MARKETING' },
        update: {},
        create: {
          acronym: 'MKT',
          name: 'MARKETING',
          code: 'MKT',
          instituteId: 1  ,
        },
    });
}
export default careerSeed;