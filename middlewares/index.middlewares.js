import sequelize from "../config/db.config.js"
import indexRouter from "../routes/index.routes.js"
import express from 'express';
import errorHandler from "./error.middlewares.js";

const middlewares = (app) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended:false }));
    sequelize.sync().then(result => {
        // console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
    app.use(indexRouter);
    app.use(errorHandler);
}

export default middlewares;