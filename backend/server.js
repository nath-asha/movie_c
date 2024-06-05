import express, { json } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes';
import { connectDB } from './config/db';

config();

const app = express();
app.use(cors());
app.use(json());

connectDB();

app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
