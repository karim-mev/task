const { DataTypes } = require('sequelize');
const db = require("../db/configSqlz");

const Category = db.define('Category', {
  CategoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CategoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
});

module.exports = Category;
