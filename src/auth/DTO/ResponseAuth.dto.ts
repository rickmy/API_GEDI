import { User } from "@prisma/client";

export interface ResponseAuth { 
  accessToken: string;
  refreshToken: string;
  user: User;
}

