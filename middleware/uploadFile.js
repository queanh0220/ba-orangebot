const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("destination");
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      console.log("filename", file);
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  
  const upload = multer({
    storage: storage,
  });

  module.exports = {upload}