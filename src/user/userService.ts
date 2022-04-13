import {prisma} from './../utils/prisma'
import {Request, Response} from "express";

export const signIn =async (req, res) => {
  const {name, email, posts, profile} = req.body;

  console.log('body', req.body);

  const postData = posts?.map((post: Prisma.PostCreateInput) => {
    return {title: post?.title, content: post?.content}
  });


  const result = await prisma.user.create({
    data: {
      name,
      email,
      posts: {
        create: postData
      },
      profile: {
        create: profile
      }
    }
  });

  res.json(result)
}

export const allUsers = async (req,res)=>{

  const users = prisma.user.findMany();

  if(!users){
    return res.status(404).json('users not found');
  }

  return res.status(200).json(users);
}

export const findUserById = async (req: Request, res: Response)=>{
  console.log('req',req.params['userId']);
  const userId = req.params.userId;
  if(!userId) return res.status(404).json('param not found');

  const userDB = await prisma.user.findUnique({where:{id:Number(userId)}});
  console.log('user', userDB);

  if(!userDB){
    return res.status(404).json('user not found');
  }

  return res.status(202).json(userDB);
}


export const findUserByEmail = async (req: Request, res: Response) =>{

}

module.exports = {
  allUsers,
  findUserByEmail,
  findUserById
}