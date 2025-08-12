import { Request, Response } from "express";
import express from 'express'
import jwt from 'jsonwebtoken'
import prisma from "../prismaClient";
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';


export const getAllUsers = async ( req: Request, res: Response) => {
    
     try {
          // Fetch user by email
          const AllUsers = await prisma.user.findMany({
            where: { role:"USER" },
            select: {
              id: true,
              email: true,
              name: true,
              executiveRefode: true,
              packageId: true,
              role: true,
              coins: true,
            },
          });
          console.log("All Users : " , AllUsers);
          res.status(200).json({ AllUsers: AllUsers});


          if (!AllUsers) {
            res.status(401).json({ error: 'faield to get users' });
            return;
          }
          } catch (err: any) {
              res.status(500).json({ error: err.message || 'Unable to get all Users' });
      }}


  export const registerAdmin = async (req: Request, res: Response) => {
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