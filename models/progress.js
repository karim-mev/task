const { DataTypes } = require('sequelize');
const { sequelize } = require('./your-sequelize-config'); // Replace with your actual Sequelize instance

const Progress = sequelize.define('Progress', {
  ProgressID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TaskID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Task',
      key: 'TaskID',
    },
  },
});

module.exports = Progress;
