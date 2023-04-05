import express from 'express';
import authController from './auth/auth.controller';
import userController from './user/user.controller';
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authController);
app.use('/api/users', userController);


const server = app.listen(3000, () => {
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
});