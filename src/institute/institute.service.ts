import { prisma } from '../utils/prisma';

const instituteService = {
  async createInstitute(name: string, code: string) {
    const institute = await prisma.institute.create({
      data: {
        name,
        code,
      },
    });
    return institute;
  },
  async getInstitutes() {
    return await prisma.institute.findMany({
      where: {
        state: true,
      },
      orderBy: {
        name: 'asc',
      }
    });
  },
  async getInstituteById(id: number) {
    const institute = await prisma.institute.findUnique({
      where: {
        id,
      },
    });
    if (!institute) {
      throw new Error().message = 'Institute not found';
    }
    return institute;
  },
  async updateInstitute(id: number, name: string, code: string) {
    const institute = await prisma.institute.update({
      where: {
        id,
      },
      data: {
        name,
        code,
      },
    });
    return institute;
  },
  async deleteInstitute(id: number) {
    const institute = await prisma.institute.delete({
      where: {
        id,
      },
    });
    return institute;
  },
};

export default instituteService;