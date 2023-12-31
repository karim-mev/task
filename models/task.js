const { DataTypes } = require("sequelize");
const db = require("../db/configSqlz");
const User = require("./users");
const Category = require("./category");


const Task = db.define("Task", {
  TaskID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  UserID: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "UserID",
    },
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
  },
  CategoryID: {
    type: DataTypes.INTEGER,
    references: {
      model: "Category",
      key: "CategoryID",
    },
  },
  DueDate: {
    type: DataTypes.DATE,
  },
  Status: {
    type: DataTypes.ENUM("in-progress", "not started", "completed"),
    defaultValue: "not started",
  },
});

Task.belongsTo(User, { foreignKey: "UserID" });
Task.belongsTo(Category, { foreignKey: "CategoryID" });


module.exports = Task;
