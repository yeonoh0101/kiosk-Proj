const UserRepository = require("../repositories/users.repository");

class UserService {
  userRepository = new UserRepository();

  // 회원가입
  createUser = async (username, password, is_admin) => {
    try {
      // 동일한 이름 존재 여부 검사를 위해 username으로 조회
      const user = await this.userRepository.findUser(username);

      if (user) {
        return { status: 400, message: "동일한 유저 이름이 존재합니다." };
      }

      await this.userRepository.createUser(username, password, is_admin);
      return { status: 200, message: "회원가입에 성공하였습니다." };
    } catch (error) {
      console.log(error);
      return { status: 400, message: "회원가입 도중 요류가 발생했습니다." };
    }
  };
}

module.exports = UserService;
