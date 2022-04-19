import express from 'express';
const userController = require  ('./user/userController');
const authController = require  ('./auth/auth.router');
const app = express()


app.use(express.json());
app.use('/api/',userController);
app.use('/api/',authController);


const server = app.listen(3000,()=>{
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
});