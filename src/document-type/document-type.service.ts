import { prisma } from "../utils/prisma";

export class DocumentTypeService {
  async getDocumentTypes() {
    const typeGeneral = prisma.documentsType.findMany({ where: { state: true, father: null }, select: { id: true, name: true, acronym: true }, orderBy: { name: 'asc' } });
    const typeChildren = this.getSubTypeDocument();
    const [general, children] = await Promise.all([typeGeneral, typeChildren]);
    return general.map((type) => {
      return {
        ...type,
        subTypeDocument: children.filter((child) => child.father === type.id),
      };
    });
  }

  async getSubTypeDocument() {
    return await prisma.documentsType.findMany({ where: { state: true, father: { not: null } }, select: { id: true, name: true, father: true, acronym: true }, orderBy: { name: 'asc' } });
  }

  async getSubTypeDocumentById(id: number) {
    return await prisma.documentsType.findMany({
      where: {
        state: true,
        father: id,
      },
    });
  }
}