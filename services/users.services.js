const Users = require("../models/users");

const createUser = async ({ username, email, password }) => {
  try {
    const createdUser = await Users.create({
      username,
      email,
      password,
    });
    return createdUser;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await Users.findAll();
    return allUsers;
  } catch (error) {
    throw error;
  }
};

const getUserByUsername = async (username) => {
  try {
    const user = await Users.findByPk(username);
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async ({ username, email, password }) => {
  try {
    const user = await Users.update(
      { username, email, password },
      { where: { username: username } }
    );
    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (username) => {
  try {
    const user = await Users.destroy({ where: { username: username } });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByUsername,
  updateUser,
  deleteUser,
};
