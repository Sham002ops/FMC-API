import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Load env vars
dotenv.config();

const app = express();

// Allowed origins
const allowedOrigins = [
  // "http://localhost:5173", // Local dev
  // "http://localhost:8080", // Optional if you test another port
  "https://finite-marshall-club1.vercel.app" // Your frontend on Vercel
];


app.options("*", (req, res) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200);
});

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

// // Explicit OPTIONS handling for all routes
// app.options("*", (req, res) => {
//   const origin = req.headers.origin;
//   //@ts-ignore
//   if (allowedOrigins.includes(origin)) {
//     res.header("Access-Control-Allow-Origin", origin);
//   }
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.sendStatus(200);
// });

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
