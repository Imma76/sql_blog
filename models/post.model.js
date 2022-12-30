import { Sequelize } from "sequelize";
import sequelize from '../config/db.config.js';

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
    }
});

export default Post;
