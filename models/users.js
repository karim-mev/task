const { DataTypes } = require("sequelize");
const db = require("../db/configSqlz");

const Users = db.define("Users", {
  username: {
    type: DataTypes.STRING(200),
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
});

// Define association with another model
Users.hasMany(OtherModel, {
  onDelete: "CASCADE", // Enable cascade on delete
});

module.exports = Users;
