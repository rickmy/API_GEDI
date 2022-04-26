import {prisma} from './../utils/prisma';
const bcrypt = require('bcrypt');

export const allUsers =  ()=>{

  return prisma.user.findMany({select:{
    password: false,
    id:true,
    email:true,
    refreshTokens: false,
    createdAt:false,
    updatedAt: false,
  }});

}

export const findUserById =  (userId: string)=>{

  return prisma.user.findUnique({where:{id:userId}});

}


export const findUserByEmail = (userEmail: string) =>{

  return prisma.user.findUnique({where: {email: userEmail}});


}

export const createUser = (email: string, password:string) => {

  return prisma.user.create({
    data: {
      email: email,
      password: bcrypt.hashSync(password, 12)
    }
  });
}

