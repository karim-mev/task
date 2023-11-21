const { DataTypes } = require('sequelize');
const { sequelize } = require('./your-sequelize-config'); // Replace with your actual Sequelize instance

const Deadline = sequelize.define('Deadline', {
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
