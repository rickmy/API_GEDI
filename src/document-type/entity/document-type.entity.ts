import { DocumentsType } from "@prisma/client";

export class DocumentsTypeEntity implements DocumentsType {
  id: number
  name: string
  acronym: string
  father: number | null
  state: boolean
  createdAt: Date
  updatedAt: Date
}