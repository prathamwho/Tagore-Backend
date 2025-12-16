import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRouter from './Routes/authRouter.js';
import { connectDB } from './Lib/db.js';
import paymentRouter from './Routes/paymentRouter.js';
import articleRouter  from './Routes/articleRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/payment', paymentRouter);
app.use('/api/article', articleRouter);


const PORT = process.env.PORT || 1600;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`server started @ ${PORT}`)
})