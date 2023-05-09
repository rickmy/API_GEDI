export interface DocumentTypeDTO {
  id: number;
  name: string;
  acronym: string;
  subType: DocumentTypeDTO[];
}