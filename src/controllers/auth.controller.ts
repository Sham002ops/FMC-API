// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient'; // your prisma client singleton import

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, executiveRefode } = req.body;

  if (!name || !email || !password || !executiveRefode) {
    res.status(400).json({ error: 'Name, email, password, and executiveRefode are required.' });
    return;
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      res.status(409).json({ error: 'User already exists with this email.' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user (assign default packageId as needed)
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        executiveRefode,
        packageId: 'a409dd91-d41e-4484-a636-98158aa0942d', // default package id (make sure this exists in DB)
        role: 'USER',
        coins: 300,
      },
    });

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: newUser.id,
        email: newUser.email,
        role: newUser.role,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      token,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Registration failed' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Fetch user by email
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        password: true,
        email: true,
        name: true,
        executiveRefode: true,
        packageId: true,
        role: true,
        coins: true,
      },
    });

    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Optionally set HttpOnly cookies or send token in response
    res.cookie('access-token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days

    // Exclude password from response
    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json({ user: userWithoutPassword, token });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Login failed' });
  }
};

export const verifyToken = (req: Request, res: Response) => {
  const token = req.cookies['access-token'] || req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ error: 'No token found' });
    return;
  }
//@ts-ignore
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(403).json({ error: 'Invalid or expired token' });
      return;
    }
    res.json({ user: decoded });
  });
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie('access-token');
  res.json({ message: 'Logged out successfully' });
};
