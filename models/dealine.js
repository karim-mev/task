const { DataTypes } = require('sequelize');
const db = require("../db/configSqlz");

const Deadline = db.define('Deadline', {
  DeadlineID: {
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
  ReminderTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Deadline;
