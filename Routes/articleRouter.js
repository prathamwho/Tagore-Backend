import express from 'express'
import { search } from '../Controllers/articleController.js';

const articleRouter = express.Router();

articleRouter.get('/search', search)

export default articleRouter;