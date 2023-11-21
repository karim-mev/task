const { DataTypes } = require('sequelize');
const db = require("../db/configSqlz");
const Task = require('./task');

const Progress = db.define('Progress', {
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

Progress.belongsTo(Task, { foreignKey: 'TaskID' });

module.exports = Progress;
