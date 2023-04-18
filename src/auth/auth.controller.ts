import express, { Request, Response } from 'express';
import authService from './auth.services';
const authController = express.Router();


authController.post('/register', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    return res.json(await authService.registerUser(email, password));
  } catch (error) {
    return res.status(400).json(error);
  }
});

authController.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    return res.send(await authService.loginUser(email, password));
  }
  catch (error) {
    return res.status(400).json({ message: error });
  }
});

export default authController;


