import express from 'express';
import postControllers from '../controllers/post.controllers.js';
import { body } from 'express-validator';

const postRouter = express.Router();

postRouter.post('/', [
    body('title').isString().withMessage('title is required'),
    body('content').isString().withMessage('content is required'),
    body('category').isString().withMessage('category is required'),
    body('authorId').isInt().withMessage('author id is required')

], postControllers.createNewPost);
postRouter.get('/:id', postControllers.findPostById);
postRouter.get('/', postControllers.getAllPosts);
postRouter.delete('/:id', postControllers.deletePost);


export default postRouter;