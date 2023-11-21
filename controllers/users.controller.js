const {
  createUser,
  getAllUsers,
  getUserByUsername,
  updateUser,
  deleteUser,
} = require("../services/users.services");

const createUserCont = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const createdUser = await createUser({ username, email, password });
    res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllUsersCont = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUserByUsernameCont = async (req, res) => {
  const username = req.params.username;
  try {
    const user = await getUserByUsername(username);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUserCont = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const updatedUser = await updateUser({
      username,
      email,
      password,
    });
    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUserCont = async (req, res) => {
  const username = req.params.username;
  try {
    const deletedUser = await deleteUser(username);
    if (!deletedUser) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(deletedUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUserCont,
  getAllUsersCont,
  getUserByUsernameCont,
  updateUserCont,
  deleteUserCont,
};
