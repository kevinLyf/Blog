import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import connectDatabase from './database/db.js';
import postRoute from './routes/postRoute.js';
import userRoute from './routes/userRoute.js';

connectDatabase()
const app = express();
const PORT = process.env.PORT || 3334;

app.use(express.json());
app.use(cors());

app.use(postRoute);
app.use(userRoute);

app.listen(PORT, () => {
    console.log(`|SERVER| Server is running on port: ${PORT}`);
});