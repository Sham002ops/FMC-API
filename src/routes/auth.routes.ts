// src/routes/auth.routes.ts
import { Router } from 'express';
import { login, verifyToken, logout, registerUser } from '../controllers/auth.controller';
import cors from 'cors'

const router = Router();


router.post('/register', registerUser);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verifyToken', verifyToken);
router.post('/verifyToken', verifyToken)


export default router;
