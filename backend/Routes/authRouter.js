import express from 'express'
import { login, logout, register } from '../Controllers/authController.js';
import { registerValidate } from '../Middlewares/authValidate.js';

const authRouter = express.Router();

authRouter.post('/logout', logout);
authRouter.post('/login', login);
authRouter.post('/register', registerValidate, register);

export default authRouter;