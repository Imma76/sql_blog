import express from 'express';
import userController from '../controllers/user.controller.js';

const userRoute = express.Router();


userRoute.post('/',userController.createUser);
userRoute.post('/login',userController.logInUser);


export default userRoute;