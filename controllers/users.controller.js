const UserService = require("../services/users.service");

class UserController {
  userService = new UserService();

  // 회원가입
  createUser = async (req, res, next) => {
    const { username, password, is_admin } = req.body;

    const { status, message } = await this.userService.createUser(
      username,
      password,
      is_admin
    );

    res.status(status).json({ message });
  };
}

module.exports = UserController;
