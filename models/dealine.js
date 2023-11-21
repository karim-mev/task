const { DataTypes } = require('sequelize');
const db = require("../db/configSqlz");
const Task = require('./task');

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

Deadline.belongsTo(Task, { foreignKey: 'TaskID' });

module.exports = Deadline;
