const { DataTypes } = require('sequelize');
const { sequelize } = require('./your-sequelize-config'); // Replace with your actual Sequelize instance

const Category = sequelize.define('Category', {
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
