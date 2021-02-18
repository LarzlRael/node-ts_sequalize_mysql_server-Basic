"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node_ts', 'larz', 'larz', {
    host: 'localhost',
    dialect: 'mysql',
});
exports.default = db;
//# sourceMappingURL=conection.js.map