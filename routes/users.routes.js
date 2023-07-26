const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users.controller");
const userController = new UserController();

// 회원가입
router.post("/signup", userController.signupUser);
// 로그인
router.post("/login", userController.loginUser);

module.exports = router;
