import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function documentTypeSeed() {
  await prisma.documentsType.upsert({
    where: { id: 1 },
    update: {},
    create: {
      acronym: 'SOL',
      name: 'Solicitudes',
    },
  });

  await prisma.documentsType.upsert({
    where: { id: 2 },
    update: {},
    create: {
      acronym: 'AC',
      name: 'Actas',
    },
  });
  await prisma.documentsType.upsert({
    where: { id: 3 },
    update: {},
    create: {
      acronym: 'HV',
      name: 'Hojas de Vida',
    },
  });
  await prisma.documentsType.upsert({
    where: { id: 4 },
    update: {},
    create: {
      acronym: 'MEMO',
      name: 'Memorándums',
    },
  });
  await prisma.documentsType.upsert({
    where: { id: 5 },
    update: {},
    create: {
      acronym: 'OFI',
      name: 'Oficios',
    },
  });

}
export default documentTypeSeed;