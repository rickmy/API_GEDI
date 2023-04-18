import { Institute } from '@prisma/client';

export class InstituteEntity implements Institute {
  id!: number;
  name!: string;
  code!: string;
  state!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
} 