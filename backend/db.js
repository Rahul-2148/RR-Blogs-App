import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'your-database name' with your MongoDB connection URL, here my database is named 'Blogs, this is local database'

const mongoURL = process.env.MONGODB_URL; // Replace 'your-database name' with your MongoDB connection URL, this is for cloud database

// Set up MongoDB database connection
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB server
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log(`Connected to MongoDB server ${mongoURL}`);
});

db.on('error', (error) => {
    console.error(`MongoDB connection error: ${error}`);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
export default db;