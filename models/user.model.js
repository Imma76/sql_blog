import  Sequelize  from "sequelize";
import sequelize from "../config/db.config.js";

const User = sequelize.define('User', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
        
    },
    email: {
        type:Sequelize.STRING,
    },
    password:{
        type: Sequelize.STRING,
        
    }

})

export default User;