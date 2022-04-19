import {Request, Response} from "express";
const jwt = require('jsonwebtoken');

export const isAuthenticated = (req: Request, res: Response) => {
  const authorization = req.header('Authorization');
  console.log('auth', authorization)
  if (!authorization) {
    return res.status(401).json('🚫 Un-Authorized 🚫');
  }

  const token = authorization.split(' ')[1];

  console.log('token', token)

  const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

  console.log('payload', payload)

  if(!payload){
    return res.status(400).json("Inavlid token");
  }


}