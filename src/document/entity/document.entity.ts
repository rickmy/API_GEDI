import { Documents } from "@prisma/client";

export class DocumentEntity implements Documents {
  id: number
  path: string
  code: string
  state: boolean
  createdAt: Date
  updatedAt: Date
  userId: number
  documentsTypeId: number
  destinataries: string;
}