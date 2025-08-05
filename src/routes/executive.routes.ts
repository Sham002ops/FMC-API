import express from 'express';
import bcrypt from 'bcrypt';
import prisma from '../prismaClient'; // adjust path as needed
import { nanoid } from 'nanoid';

// Generate referralCode of 6 characters
const referralCode = nanoid(6);
const router = express.Router();

// Register Executive
router.post('/register-executive', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ error: 'Name, email, and password are required.' });
    return;
  }

  try {
    // Check if executive with email already exists
    const existingExecutive = await prisma.executive.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingExecutive) {
      res.status(409).json({ error: 'Executive already exists with this email.' });
      return;
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const newExecutive = await prisma.executive.create({
      data: {
        name,
        email,
        password: hashedPassword,
        referralCode,
      },
    });

    res.status(201).json({ executive: newExecutive });
    console.log(`Created executive: ${JSON.stringify(newExecutive)}`);
  } catch (err: any) {
    console.error('Error creating executive:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Get list of executives (without password)
router.get('/get-executives', async (_req, res) => {
  try {
    const executives = await prisma.executive.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    res.status(200).json(executives);
  } catch (err: any) {
    console.error('Error fetching executives:', err);
    res.status(500).json({ error: err.message || 'Internal server error.' });
  }
});

export default router;
