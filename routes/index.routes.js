import express from 'express';
import postRouter from './post.router.js';
const indexRouter = express.Router();
import userRoute from './user.router.js';
import commentRoutes from './comment.routes.js';

indexRouter.use('/post', postRouter)
indexRouter.use('/user', userRoute);
indexRouter.use('/comment', commentRoutes);

export default indexRouter;
