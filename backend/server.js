import express from 'express'
import dotenv from 'dotenv'
import authRouter from './Routes/authRouter.js';
import { connectDB } from './Lib/db.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);


const PORT = process.env.PORT || 1600;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`server started @ ${PORT}`)
})