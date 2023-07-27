const { Users } = require("../models");

class UserRepository {
  // 동일한 이름 존재 여부 검사를 위해 username으로 조회
  findUser = async (username) => {
    const user = await Users.findOne({ where: { username } });
    return user;
  };

  // 회원가입
  createUser = async (username, password, is_admin) => {
    const createUser = await Users.create({ username, password, is_admin });

    return createUser;
  };

  // 관리자 인지 검증하기 위해 조회
  findByAdmin = async (userId) => {
    const adminUser = await Users.findOne({ where: { userId } });
    return adminUser;
  };
}

module.exports = UserRepository;
