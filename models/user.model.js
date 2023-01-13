import  Sequelize  from "sequelize";
import sequelize from "../config/db.config.js";
import Post from "./post.model.js";

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


//User.hasMany(Post);
 
export default User;