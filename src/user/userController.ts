import express from 'express';
import * as userService from './userService';
import {isAuthenticated} from "../middlewares/auth.middlewar";
const app = express.Router();


app.get('/users',isAuthenticated, userService.allUsers);
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