const Sequelize = require('sequelize');

const sequelize = new Sequelize('dagtentamen', 'root', 'SQLww', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;