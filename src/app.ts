import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Load env vars
dotenv.config();

const app = express();

// Allowed origins
const allowedOrigins = [
  "http://localhost:5173", // Local dev
  "http://localhost:8080", // Optional if you test another port
  "https://finite-marshall-club1.vercel.app" // Your frontend on Vercel
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS policy: Not allowed by server"));
    }
  },
  credentials: true
}));

// Handle preflight requests for all routes
app.options("*", cors({
  origin: allowedOrigins,
  credentials: true
}));


app.use(express.json());
app.use(cookieParser());



// Routes
import authRoutes from './routes/auth.routes';
import executiveRoutes from './routes/executive.routes';
import packageRoutes from './routes/package.routes';  
import webinarRoutes from './routes/webinar.routes';
import adminRoutes from './routes/admin.routes';

app.use('/auth', authRoutes);
app.use('/executive', executiveRoutes);
app.use('/package', packageRoutes);
app.use('/webinar', webinarRoutes);
app.use('/admin', adminRoutes);

export default app;
