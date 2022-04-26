import express, { Request, Response } from 'express';
import { isAuthenticated } from '../middlewares/auth.middlewar';
import { allUsers } from './userService';
const app = express.Router();


app.get('/users',isAuthenticated,async (req: Request, res: Response) => {
  const usersDB = await allUsers();
  return res.json(usersDB);
});
/*
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
})*/

module.exports = app;