import Sequelize  from "sequelize";
import sequelize    from "../config/db.config";

const Comment = sequelize.define('Comment', {
    id: {
        autoIncrement: true,
        type:Sequelize.INTEGER,
    },
    postId: {
        type:Sequelize.INTEGER,
        allowNull:false
    },

})

export default Comment;