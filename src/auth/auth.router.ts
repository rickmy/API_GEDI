import express, {Request, Response} from 'express';
import * as authService from './auth.services';
import * as userService from '../user/userService';
import {addRefreshTokenToWhiteList} from "./auth.services";
const jwt = require('jsonwebtoken');
const {v4: uuid4} = require('uuid');
const tokens = require('../utils/jwt');
const bcrypt = require('bcrypt');
const { hashToken } = require('../utils/hashToken');
const app = express.Router();


app.post('/register', async (req: Request, res: Response) => {
  const {email, password} = req.body;


  if (!email || !password) {
    return res.status(400).json('You must provide an email and a password.');
  }

  const userExist = await userService.findUserByEmail(email);

  if (userExist) {
    return res.status(400).json('email already in use.');
  }

  const user = await userService.createUser(email, password);

  const jti = uuid4();

  const {accessToken, refreshToken} = tokens.generateToken(user, jti);

  await authService.addRefreshTokenToWhiteList(jti, refreshToken, user.id);


  return res.status(200).json({
    accessToken,
    refreshToken
  });
});

app.post('/login', async (req: Request, res: Response) => {
  const {email, password} = req.body;

  console.log('body', req.body)

  if (!email || !password) {
    return res.status(400).json('You must provide an email and a password.');
  }

  const userExist = await userService.findUserByEmail(email);

  if (!userExist) {
    return res.status(403).json('email not found.');
  }

  const validPassword = bcrypt.compare(password, userExist.password);

  if(!validPassword){
    return res.status(403).json('Invalid login credentials.');
  }

  const jti = uuid4();
  const { accessToken, refreshToken} = tokens.generateToken(userExist, jti);

  await addRefreshTokenToWhiteList(jti, refreshToken, userExist.id);

   return res.status(200).json({
     accessToken,
     refreshToken
   })

});

app.post('/refreshToken', async (req: Request, res: Response ) => {
  const  refreshToken  = req.body.refreshToken;
  if (!refreshToken) {
    return res.status(400).json('Missing refresh token.');
  }
  const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  const savedRefreshToken = await authService.findRefreshTokenById(payload.jti);

  if (!savedRefreshToken || savedRefreshToken.revoked === true) {
    return res.status(401).json('Unauthorized');
  }

  const hashedToken = hashToken(refreshToken);
  if (hashedToken !== savedRefreshToken.hashedToken) {
    return res.status(401).json('Unauthorized');
  }

  const user = await userService.findUserById(payload.userId);
  if (!user) {
    return res.status(401).json('Unauthorized');
  }

  await authService.deleteRefreshToken(savedRefreshToken.id);
  const jti = uuid4();
  const { accessToken, refreshToken: newRefreshToken } = tokens.generateTokens(user, jti);
  await addRefreshTokenToWhiteList(jti, newRefreshToken, user.id );

  return res.json({
    accessToken,
    refreshToken: newRefreshToken
  });
});

app.post('/revokeRefreshTokens', async (req: Request, res: Response) => {
  const  userId  = req.body.userId;
  await authService.revokeTokens(userId);
  return res.json({ message: `Tokens revoked for user with id #${userId}` });
});


module.exports = app;


