const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('tareas','root', '41E70du8' ,{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;