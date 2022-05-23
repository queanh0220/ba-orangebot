var express = require("express");
require("dotenv").config();
const { getDbInstance } = require("./database");
const userRouter = require("./routes/user");
const uploadRouter = require("./routes/upload");
const downloadRouter = require("./routes/download");
const fileRouter = require("./routes/file");
const chatboxRouter = require("./routes/chatbox");
const port = process.env.PORT;
const cors = require('cors')


const main = async () => {
  await getDbInstance();
  const app = express();
  app.use(cors())
  app.use(express.json());
  app.use("/users", userRouter);
  app.use("/upload", uploadRouter);
  app.use("/download", downloadRouter);
  app.use("/files", fileRouter);
  app.use("/chatboxs", chatboxRouter);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main();
