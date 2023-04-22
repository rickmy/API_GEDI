import { PrismaClient } from '@prisma/client'
import roleSeed from './seeds/role.seed'
import instituteSeed from './seeds/institutes.seed';
import careerSeed from './seeds/career.seed';
import documentTypeSeed from './seeds/typeDocument.seed';
const prisma = new PrismaClient()
async function main() {
    //await roleSeed();
    //await instituteSeed();
    //await careerSeed();
    await documentTypeSeed();
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })  
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })