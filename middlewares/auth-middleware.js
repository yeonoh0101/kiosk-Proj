const jwt = require("jsonwebtoken");
require("dotenv").config();
const env = process.env;
const { Users } = require("../models");

module.exports = async (req, res, next) => {
  const { authorization } = req.cookies;

  const [authType, authToken] = (authorization ?? "").split(" ");

  if (authType !== "Bearer" || !authToken) {
    return res
      .status(400)
      .json({ errorMessage: "로그인 후에 이용할 수 있습니다." });
  }

  try {
    const { userId } = jwt.verify(authToken, env.SECRET_KEY);

    const user = await Users.findByPk(userId);
    res.locals.user = user;

    next(); // 다음 미들웨어로 보낸다.
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ errorMessage: "로그인 후에 이용할 수 있습니다." });
  }
};
