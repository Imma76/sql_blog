import express from 'express';
import { body,param } from 'express-validator';
import commentController from '../controllers/comment.controller.js';
const commentRoutes = express.Router();


commentRoutes.post('/',[body('comment').isString().withMessage('please pass in a comment'), body('postId').isInt().withMessage('post is missing')],commentController.postComment);
commentRoutes.get('/:id',[param('id').isInt().withMessage('pass in comment id')], commentController.getCommentbyId);
commentRoutes.delete('/:id',[param('id').isInt().withMessage('pass is comment id')],commentController.deleteCommentById);


export default commentRoutes;