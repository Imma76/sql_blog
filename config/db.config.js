import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('blog_database','root','advent82118',{ dialect: 'mysql', host: 'localhost', })

export default sequelize;
