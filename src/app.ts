import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Load env vars
dotenv.config();

const app = express();

// Allowed origins
app.use(
  cors({
    origin: "https://finite-marshall-club1.vercel.app",
    credentials: true, // if you send cookies or auth headers
  })
);



app.use(express.json());
app.use(cookieParser());



// Routes
import authRoutes from './routes/auth.routes';
import executiveRoutes from './routes/executive.routes';
import packageRoutes from './routes/package.routes';  
import webinarRoutes from './routes/webinar.routes';
import adminRoutes from './routes/admin.routes';

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});


app.use('/auth', authRoutes);
app.use('/executive', executiveRoutes);
app.use('/package', packageRoutes);
app.use('/webinar', webinarRoutes);
app.use('/admin', adminRoutes);

export default app;
