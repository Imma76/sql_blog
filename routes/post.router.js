import express from 'express';
import postControllers from '../controllers/post.controllers.js';

const postRouter = express.Router();

postRouter.post('/', postControllers.createNewPost);
postRouter.post('/:id', postControllers.findPostById);


export default postRouter;