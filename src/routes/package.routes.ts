import express from 'express';
import prisma from '../prismaClient'; // Adjust path as needed

const router = express.Router();

// Create Package
router.post('/create-package', async (req, res) => {
  const { name, priceInCoins, validityDays } = req.body;

  try {
    const newPackage = await prisma.package.create({
      data: {
        name,
        priceInCoins,
        validityDays,
      },
    });
    res.status(201).json(newPackage);
  } catch (err: any) {
    res.status(400).json({ error: err.message || 'Failed to create package' });
  }
});

// Get all packages
router.get('/', async (_req, res) => {
  try {
    const packages = await prisma.package.findMany();
    res.status(200).json(packages);
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to fetch packages' });
  }
});

export default router;
