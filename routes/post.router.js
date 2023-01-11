import express from 'express';
import postControllers from '../controllers/post.controllers.js';

const postRouter = express.Router();

postRouter.post('/', postControllers.createNewPost);
postRouter.get('/:id', postControllers.findPostById);
postRouter.get('/', postControllers.getAllPosts);
postRouter.delete('/:id', postControllers.deletePost);


export default postRouter;