import sequelize from "../config/db.config.js"
import indexRouter from "../routes/index.routes.js"


const middlewares = (app) => {
    sequelize.sync().then(result => {
        // console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
    app.use(indexRouter);
}

export default middlewares;