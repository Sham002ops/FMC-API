import { Request, Response } from "express";
import express from 'express'
import jwt from 'jsonwebtoken'
import prisma from "../prismaClient";

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
