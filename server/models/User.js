// import mysql2 from 'mysql2';
// if (options.dialect === 'mysql') {
//   options.dialectModule = mysql2;
// }
const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    imageURL: {
      type: Sequelize.STRING
    },
    favoriteMethods: {
      type: Sequelize.STRING
    },
    favoriteCoffee: {
      type: Sequelize.STRING
    },
    favoriteShop: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)