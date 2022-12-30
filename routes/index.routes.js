import express from 'express';
const indexRouter = express.Router();

indexRouter.use('/post', post)

export default indexRouter;
