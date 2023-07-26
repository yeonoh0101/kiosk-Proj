const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users.controller");
const userController = new UserController();

// 회원가입
router.post("/signup", userController.createUser);

module.exports = router;
