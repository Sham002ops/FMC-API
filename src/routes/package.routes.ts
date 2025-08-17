import express from 'express';
import prisma from '../prismaClient'; // Adjust path as needed
import { adminMiddleware } from '../Middlewares/adminMiddleware';

const router = express.Router();

// Create Package

 router.post('/create-package', adminMiddleware, async (req, res) => {
  const { name, priceInCoins, validityDays, features } = req.body;

  // Validate input
  if (
    !name ||
    typeof priceInCoins !== 'number' ||
    typeof validityDays !== 'number' ||
    !Array.isArray(features) ||
    !features.every((feature) => typeof feature === 'string')
  ) {
    res.status(400).json({ error: 'Invalid or missing fields: name, priceInCoins, validityDays, features (string array) are required.' });
    return
  }

  try {
    const newPackage = await prisma.package.create({
      data: {
        name,
        priceInCoins,
        validityDays,
        features : features,
      },
    });

    res.status(201).json({
      message: 'Package created successfully',
      package: newPackage,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to create package' });
  }
});

// Get all packages
router.get('/allpackages',adminMiddleware, async (_req, res) => {
  try {
    const packages = await prisma.package.findMany();
    res.status(200).json(packages);
    console.log(" all Packages: ", packages);
    
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to fetch packages' });
  }
});

export default router;
