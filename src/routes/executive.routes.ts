import express from 'express';
import bcrypt from 'bcrypt';
import prisma from '../prismaClient'; // adjust path as needed
import { nanoid } from 'nanoid';
import { adminMiddleware } from '../Middlewares/adminMiddleware';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';


// Generate referralCode of 6 characters
const referralCode = nanoid(6);
const router = express.Router();

// Register Executive
router.post('/register-executive', adminMiddleware, async (req, res) => {
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
    const referralCode = await nanoid(6);

    const newExecutive = await prisma.executive.create({
      data: {
        name,
        email,
        password: hashedPassword,
        referralCode : referralCode,
      },
    });

    res.status(201).json({ executive: newExecutive });
    console.log(`Created executive: ${JSON.stringify(newExecutive)}`);
  } catch (err: any) {
    console.error('Error creating executive:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});


router.post('/executivelogin' , async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user by email
    const executive = await prisma.executive.findUnique({
      where: { email },
      select: {
        id: true,
        password: true,
        email: true,
        name: true,
      },
    });

    if (!executive) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, executive.password);
    if (!passwordMatch) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        executiveId: executive.id,
        name: executive.name,
        email: executive.email,
        role: 'EXECUTIVE',
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Optionally set HttpOnly cookies or send token in response
    res.cookie('access-token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days

    // Exclude password from response
    const { password: _, ...userWithoutPassword } = executive;
    res.status(200).json({ user: userWithoutPassword, token });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Login failed' });
  }
});

// Get list of executives (without password)
router.get('/get-executives', adminMiddleware, async (_req, res) => {
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
