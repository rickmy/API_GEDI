const jwt = require('jsonwebtoken');
const { v4: uuid4 } = require('uuid');
const tokens = require('../utils/jwt');
const bcrypt = require('bcrypt');
const { hashToken } = require('../utils/hashToken');
import userService from '../user/user.service';

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
      refreshToken
    };
  },

  async loginUser(email: string, password: string) {
    if (!email || !password) throw ('You must provide an email and a password.');

    const userExist = await userService.findUserByEmail(email);
    if (!userExist) throw ('email not found.');

    const validPassword = bcrypt.compare(password, userExist.password);

    if (!validPassword) {
      throw ('Invalid login credentials.');
    }
    const jti = uuid4();
    const { accessToken, refreshToken } = tokens.generateToken(userExist, jti);

    return {
      accessToken,
      refreshToken
    }
  },
}
export default authService;