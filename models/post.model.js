import { Sequelize } from "sequelize";
import sequelize from '../config/db.config.js';
import User from "./user.model.js";

const Post = sequelize.define('Post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
                allowNull: false,
    },
    image:{
        type: Sequelize.STRING,
        
    },
    likes:{
        type:Sequelize.INTEGER
    }
});

Post.belongsTo(User)

export default Post;
