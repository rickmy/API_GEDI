import { prisma } from '../utils/prisma';
const bcrypt = require('bcrypt');
const userService = {
  async allUsers() {
    return await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true
      }
    });
  },
  async findUserById(userId: number) {
    return await prisma.user.findUnique({ where: { id: userId } });
  },
  async findUserByEmail(userEmail: string) {
    return await prisma.user.findUnique({ where: { email: userEmail } });
  },

  async createUser(email: string, password: string) {
    const userName = email.split('@')[0];
    try {
      const user = await prisma.user.create({
        data: {
          email: email,
          password: bcrypt.hashSync(password, 12),
          roleId: 1,
          username: userName,
        }
      });
      return user;
    } catch (err) {
      console.log(err);
    }

  }
}


export default userService;

