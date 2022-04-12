import express from 'express';

const app = express()

const routesUser = require('../routes/users')

app.use(express.json());
app.use('/api',routesUser);


const server = app.listen(3000,()=>{
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
});