import sequelize from "../config/db.config.js"


const middlewares = (app) => {
    sequelize.sync().then(result => {
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
}

export default middlewares;