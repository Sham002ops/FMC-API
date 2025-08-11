// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient'; // your prisma client singleton import


const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, executiveRefode, role } = req.body;

  if (!name || !email || !password  || !role) {
    res.status(400).json({ error: 'Name, email and password are required.' });
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

    if (role === 'USER') {
        if (!executiveRefode) {
          return res.status(400).json({ error: 'executiveRefode is required for regular users.' });
        }
        // if required add other checks
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
        packageId: role === 'USER' ? 'a409dd91-d41e-4484-a636-98158aa0942d' : null, // default package for users only
        role: role,
        coins: role === 'ADMIN' ? 9999999 : 5000,
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
      secret: JWT_SECRET,
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
        name: user.name,
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
  const token = (req.cookies && req.cookies['access-token']) || 
                (req.headers.authorization && req.headers.authorization.startsWith('Bearer ') 
                  ? req.headers.authorization.split(' ')[1]
                  : undefined);

  if (!token) {
    return res.status(401).json({ error: 'No token found' });
  }
//@ts-ignore
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    res.json({ user: decoded });
    console.log("decoded at verify token: ", decoded);
    
  });
};


export const logout = (req: Request, res: Response) => {
  res.clearCookie('access-token');
  res.json({ message: 'Logged out successfully' });
};
