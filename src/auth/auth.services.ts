import {prisma} from './../utils/prisma';
import { hashToken} from './../utils/hashToken';
import {Request, Response} from "express";

export const addRefreshTokenToWhiteList =  (jti:string, refreshToken:string, userId:string) =>{
 return  prisma.refreshToken.create({
   data: {
     id: jti,
     hashedToken: hashToken(refreshToken),
     userId: userId
   }
 });
};

export const findRefreshTokenById =  (id: string) => {
  const fined =  prisma.refreshToken.findUnique({
    where: {
      id
    }
  });
  return fined;
}

// soft delete tokens after usage.
export const deleteRefreshToken = (id:string) => {
  return prisma.refreshToken.update({
    where: {
      id,
    },
    data: {
      revoked: true
    }
  });
}

export const revokeTokens = (userId:string) => {
  return prisma.refreshToken.updateMany({
    where: {
      userId
    },
    data: {
      revoked: true
    }
  });
}