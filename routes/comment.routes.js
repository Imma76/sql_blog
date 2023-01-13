import express from 'express';
import commentController from '../controllers/comment.controller.js';
const commentRoutes = express.Router();


commentRoutes.post('/',commentController.postComment);
commentRoutes.get('/:id', commentController.getCommentbyId);
commentRoutes.delete('/:id',commentController.deleteCommentById);


export default commentRoutes;