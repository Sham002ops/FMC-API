import express from 'express';
import prisma from '../prismaClient'; // adjust path if necessary

const router = express.Router();

// Create Webinar
router.post('/create', async (req, res) => {
  const { id, title, date, zoomLink, thumbnail, packageId } = req.body;

  try {
    const newWebinar = await prisma.webinar.create({
      data: {
        id,
        title,
        date: new Date(date), // Ensure date is a Date object
        zoomLink,
        thumbnail,
        packageId,
      },
    });
    res.status(201).json(newWebinar);
  } catch (err: any) {
    res.status(400).json({ error: err.message || 'Failed to create webinar' });
  }
});

// Get all webinars
router.get('/', async (_req, res) => {
  try {
    const webinars = await prisma.webinar.findMany();
    res.status(200).json(webinars);
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to fetch webinars' });
  }
});

export default router;
