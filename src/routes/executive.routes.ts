import express from 'express';
import bcrypt from 'bcrypt';
import prisma from '../prismaClient'; // adjust path as needed
import { nanoid } from 'nanoid';
import { adminMiddleware } from '../Middlewares/adminMiddleware';
import jwt from 'jsonwebtoken';
import { log } from 'console';
import { executivelogin, getExecutives, registerExecutive, registerUserByExecutive } from '../controllers/executive.controlers';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';


// Generate referralCode of 6 characters
const referralCode = nanoid(6);
const router = express.Router();

// Register Executive
router.post('/register-executive', adminMiddleware, registerExecutive)

router.post('/executivelogin' , executivelogin)

// Get list of executives (without password)
router.get('/get-executives', adminMiddleware, getExecutives)
router.post('/register-user', registerUserByExecutive)

export default router;
