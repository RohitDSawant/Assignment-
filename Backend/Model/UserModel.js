const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  phone: String,
  email: String,
  website: String,
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
