const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();

const connectionToDatabase = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

module.exports = connectionToDatabase;

  