import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

// Auth Routes
import authRoutes from './routes/auth.routes';
import executiveRoutes from './routes/executive.routes';
import packageRoutes from './routes/package.routes';  
import webinarRoutes from './routes/webinar.routes';
import adminRoutes from './routes/admin.routes'

app.use(cors({
  origin: 'http://localhost:8080', 
  credentials: true
}));

app.use('/auth', authRoutes);
app.use('/executive', executiveRoutes);
app.use('/package', packageRoutes);
app.use('/webinar', webinarRoutes);
app.use('/admin', adminRoutes);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});


