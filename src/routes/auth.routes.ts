import { Router } from 'express';

const authRouter = Router();

authRouter.post('/register', (req, res) => {});

authRouter.post('/login', (req, res) => {});

authRouter.post('/logout', (req, res) => {});

authRouter.get('/hola', (req, res) => {
  res.json({ message: 'Hola mundo' });
});

export default authRouter;
