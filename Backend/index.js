const express = require("express");
const connectionToDatabase = require("./db");
const axios = require("axios");
const UserModel = require("./Model/UserModel");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

// Connect to the database
const connectToDatabase = async () => {
  try {
    await connectionToDatabase;
    console.log("Connected to the database on port " + PORT);
  } catch (error) {
    console.log("Error connecting to the database");
  }
};

//  route for getting the data from the database

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Function to fetch data and populate the database

const fetchData = async () => {
  try {
    let response = await axios("https://jsonplaceholder.typicode.com/users");
    const allUsers = response.data;

    let existingUsers = await UserModel.find({});

    if (existingUsers.length === 0) {
      await UserModel.create(allUsers);
      console.log("Database populated with initial data");
    }
  } catch (error) {
    console.error(error.message);
  }
};

// Start the server
const startServer = async () => {
  await connectToDatabase();
  await fetchData();
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
};

// Start the server
startServer();
