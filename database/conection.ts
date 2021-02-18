import { Sequelize } from "sequelize";


const db = new Sequelize('node_ts', 'larz', 'larz', {
    host: 'localhost',
    dialect: 'mysql',
    //login :false
});

export default db;