var express = require("express");
require("dotenv").config();
const { getDbInstance } = require("./database");
const userRouter = require("./routes/user");
const uploadRouter = require("./routes/upload");
const fileRouter = require("./routes/file");
const chatboxRouter = require("./routes/chatbox");
const postRouter = require("./routes/post");
const port = process.env.PORT;
const cors = require('cors')


const main = async () => {
  await getDbInstance();
  const app = express();
  app.use(cors())
  app.use(express.json());
  app.use("/users", userRouter);
  app.use("/upload", uploadRouter);
  app.use("/files", fileRouter);
  app.use("/chatboxs", chatboxRouter);
  app.use("/posts", postRouter);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main();
