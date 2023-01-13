import express from 'express';
import { body } from 'express-validator';
import userController from '../controllers/user.controller.js';

const userRoute = express.Router();


userRoute.post('/', [body('name').isString().withMessage('name is required'), body('email').isEmail().withMessage('email is required'),
body('password').isString().withMessage('password is required')], userController.createUser);
userRoute.post('/login',[body('email').isEmail().withMessage('email is required'),body('password').isString().withMessage('password is required')],userController.logInUser);


export default userRoute;