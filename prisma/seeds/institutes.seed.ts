import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function instituteSeed() {
    const ITSYAVIRAC = await prisma.institute.upsert({
        where: { code: 'ITSYAVIRAC' },
        update: {},
        create: {
            name: 'Instituto Tecnológico Superior de Yavirac',
            code: 'ITSYAVIRAC',
        },
    });
    const ITSBENITOJUAREZ = await prisma.institute.upsert({
        where: { code: 'ITSBENITOJUAREZ' },
        update: {},
        create: {
            name: 'Instituto Tecnológico Superior Benito Juárez',
            code: 'ITSBENITOJUAREZ',
        },
    });
}
export default instituteSeed;