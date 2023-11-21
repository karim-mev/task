const { DataTypes } = require('sequelize');
const db = require("../db/configSqlz");

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

module.exports = Progress;
