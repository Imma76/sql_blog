import express from 'express';
import postRouter from './post.router.js';
const indexRouter = express.Router();

indexRouter.use('/post', postRouter)

export default indexRouter;
