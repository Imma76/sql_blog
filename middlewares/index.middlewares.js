import sequelize from "../config/db.config.js"
import indexRouter from "../routes/index.routes.js"
import express from 'express';
import errorHandler from "./error.middlewares.js";
import User from "../models/user.model.js";
import Post from "../models/post.model.js";


const middlewares = (app) => {
    // User.hasMany(Post)
    app.use(express.json());
    app.use(express.urlencoded({ extended:false }));
    sequelize.sync(
       // { force: true }
    ).then(result => {
        // console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
    app.use(indexRouter);
    app.use(errorHandler);
}

export default middlewares;