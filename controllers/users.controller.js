const UserService = require("../services/users.service");

class UserController {
  userService = new UserService();

  // 회원가입
  signupUser = async (req, res, next) => {
    const { username, password, is_admin } = req.body;

    const { status, message } = await this.userService.createUser(
      username,
      password,
      is_admin
    );

    res.status(status).json({ message });
  };

  // 로그인
  loginUser = async (req, res, next) => {
    const { username, password } = req.body;

    const { status, message, token } = await this.userService.loginUser(
      username,
      password
    );

    res.cookie("authorization", `Bearer ${token}`, { httpOnly: true });
    res.status(status).json({ message });
  };
}

module.exports = UserController;
