import express from 'express';
import postRouter from './post.router.js';
const indexRouter = express.Router();
import userRoute from './user.router.js';

indexRouter.use('/post', postRouter)
indexRouter.use('/user', userRoute);

export default indexRouter;
