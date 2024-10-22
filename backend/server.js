import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import db from './db.js';
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from 'cloudinary';
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();
dotenv.config();

// Routes
import userRoute from './routes/user.Routes.js';
import blogRoute from './routes/blog.Routes.js';

const port = process.env.PORT || 4001;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL, 'https://rahulraj-blogs.vercel.app',  // Vercel frontend URL added
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));


app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
}));

// Defining Routes
app.use('/api/users', userRoute);
app.use('/api/blogs', blogRoute);

// Cloudinary 
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_SECRET_KEY // Click 'View API Keys' above to copy your API secret
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
