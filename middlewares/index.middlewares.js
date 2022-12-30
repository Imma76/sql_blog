import sequelize from "../config/db.config.js"
import indexRouter from "../routes/index.routes.js"
import express from 'express';

const middlewares = (app) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended:false }));
    sequelize.sync().then(result => {
        // console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
    app.use(indexRouter);
}

export default middlewares;