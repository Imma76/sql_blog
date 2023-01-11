import 'express-async-errors';
import express from 'express';
import dotenv from 'dotenv';
import middlewares from './middlewares/index.middlewares.js'
const app = express()

dotenv.config();


middlewares(app)
app.listen(2400,()=>{
    console.log('server is on and listening on port 2400')
})