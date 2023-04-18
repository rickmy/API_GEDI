import express from 'express';
import router from './routes/router';
import cors from 'cors';
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router)



const server = app.listen(3000, () => {
  console.log(`🚀 Server ready at: http://localhost:3000 🚀`)
});