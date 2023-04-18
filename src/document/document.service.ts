import { log } from 'console';
import storageService from '../storage/storage.service';
import { prisma } from '../utils/prisma';

class DocumentService {

  async uploadFile(code: string, file: any, userId: number) {
    const { data, error } = await storageService.uploadFile(file);
    if (error) {
      throw new Error().message = error.message;
    }
    const doc = await this.createDocument(data.path, code, userId ?? 1);
  }

  async createDocument(path: string, code: string, userId: number) {
    try {
      const document = await prisma.documents.create({
        data: {
          path,
          code,
          userId: Number(userId),
        },
      });
      return document;
    } catch (error) {
      throw new Error().message = error.message;
    }

    

  }

  async getDocuments() {
    return await prisma.documents.findMany({
      where: {
        state: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });
  }
  async getDocumentById(id: number) {
    const document = await prisma.documents.findUnique({
      where: {
        id,
      },
    });
    if (!document) {
      throw new Error().message = 'Document not found';
    }
    return document;
  }
  async updateDocument(id: number, path: string, code: string) {
    const document = await prisma.documents.update({
      where: {
        id,
      },
      data: {
        path,
        code,
      },
    });
    return document;
  }
  async deleteDocument(id: number) {
    const document = await prisma.documents.delete({
      where: {
        id,
      },
    });
    return document;
  }
};

export default DocumentService;