const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const cookieParser = require("cookie-parser");
const app = express();
const UserRouter = require("./routes/users.routes");
const ProductRouter = require("./routes/products.routes");

app.use(express.json());
app.use(cookieParser());
app.use("/", [UserRouter, ProductRouter]);

app.listen(PORT, () => {
  console.log(`${PORT}번 포트로 서버가 열렸습니다.`);
});
