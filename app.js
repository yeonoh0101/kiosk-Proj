const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.listen(PORT, () => {
  console.log(`${PORT}번 포트로 서버가 열렸습니다.`);
});
