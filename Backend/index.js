const express = require("express");
const connectionToDatabase = require("./db");
const app = express();
app.use(express.json());
const axios = require("axios");
const UserModel = require("./Model/UserModel");
require("dotenv").config();
const PORT = process.env.PORT;

app.get("/users", async (req, res) => {
  try {
    const Users = await UserModel.find({});
    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

(async () => {
  try {
    app.listen(async () => {
      try {
        await connectionToDatabase;
        console.log("Connected to the database on port " + PORT);
      } catch (error) {
        console.log("Error connecting to the database");
      }
    });

    let response = await axios("https://jsonplaceholder.typicode.com/users");
    const allUsers = response.data;

    let exisitingUsers = await UserModel.find({});

    if (exisitingUsers.length === 0) {
      await UserModel.create(allUsers);
    }
    app.listen(async () => {
      try {
        await connectionToDatabase;
        console.log("Connected to the database on port " + PORT);
      } catch (error) {
        console.log("Error connecting to the database");
      }
    });
  } catch (error) {
    console.error(error.message);
  }
})();

// listening on port
