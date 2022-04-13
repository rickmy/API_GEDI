import {Prisma, PrismaClient} from '@prisma/client'
import express from 'express';
import {throws} from "assert";

const prisma = new PrismaClient();
const app = express.Router();


app.post('/signup', async (req, res) => {
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
});

app.get('/user', async (req,res)=>{
  if(!users){
    return res.status(404).json('user not found');
  }

  return res.json(users);
});

app.get('/user/:userId', async (req, res)=>{
  console.log('req',req.params['userId']);
  const userId = req.params.userId;
  if(!userId) return res.status(404).json('param not found');

  const userDB = await prisma.user.findUnique({where:{id:Number(userId)}});
  console.log('user', userDB);

  if(!userDB){
    return res.status(404).json('user not found');
  }

  return res.status(202).json(userDB);
})

module.exports = app;