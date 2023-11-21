const express = require("express");
const {
  getAllUsersCont,
  createUserCont,
  getUserByUsernameCont,
  updateUserCont,
  deleteUserCont,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/users", getAllUsersCont);
router.get("/users/:username", getUserByUsernameCont);
router.post("/users", createUserCont);
router.put("/users/:username", updateUserCont);
router.delete("/users/:username", deleteUserCont);
