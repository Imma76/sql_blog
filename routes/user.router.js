import express from 'express';

const userRoute = express.Router();


userRoute.post('/');
userRoute.post('/login');


export default userRoute;