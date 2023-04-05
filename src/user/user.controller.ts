import express, { Request, Response } from 'express';
import { isAuthenticated } from '../middlewares/auth.middlewar';
import userService from './user.service';
const userController = express.Router();


userController.get('/',isAuthenticated,async (req: Request, res: Response) => {
  const usersDB = await userService.allUsers();
  return res.json(usersDB);
});

userController.get('/:userId',isAuthenticated,async (req: Request, res: Response) => {
  const userId = req.params.userId;
  if(!userId) return res.status(404).json('param not found');
  return res.json(await userService.findUserById(Number(userId)));
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

export default userController;