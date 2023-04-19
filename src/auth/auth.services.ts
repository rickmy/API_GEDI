const jwt = require('jsonwebtoken');
const { v4: uuid4 } = require('uuid');
const tokens = require('../utils/jwt');
const bcrypt = require('bcrypt');
const { hashToken } = require('../utils/hashToken');
import { User } from '@prisma/client';
import userService from '../user/user.service';
import { ResponseAuth } from './DTO/ResponseAuth.dto';

const authService = {
  async registerUser(email: string, password: string) {
    if (!email || !password) {
      throw new Error('You must provide an email and a password.');
    }

    const userExist = await userService.findUserByEmail(email);

    if (userExist) throw ('email already in use.');

    const user = await userService.createUser(email, password);

    const jti = uuid4();

    const { accessToken, refreshToken } = tokens.generateToken(user, jti);

    return {
      accessToken,
      refreshToken,
      user
    };
  },

  async loginUser(email: string, password: string): Promise<ResponseAuth> {
    if (!email || !password) throw Error('Correo o contraseña incorrectos.');

    const userExist: User | null = await userService.findUserByEmail(email);
    if (!userExist) throw new Error('email not found.');

    const validPassword = await bcrypt.compare(password, userExist.password);
    
    if (!validPassword) {
      throw Error('Invalid login credentials.');
    }
    const jti = uuid4();
    const { accessToken, refreshToken } = tokens.generateToken(userExist, jti);
    userExist.password = ''

    return {
      accessToken,
      refreshToken,
      user: userExist
    }
  },
}
export default authService;