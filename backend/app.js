const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

// 1. Connection to your local MongoDB database
// 'myDatabase' will be created automatically when you save the first user.
const mongoUrl = "mongodb://localhost:27017/SimpleLoginForm";

// --- FIXED CONNECTION CODE ---
// We removed { useNewUrlParser: true, useUnifiedTopology: true } because they are now automatic.
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

// Import the Schema
require("./userDetails");
const User = mongoose.model("UserInfo");

// API 1: Register User
app.post("/register", async (req, res) => {
  const { fname, email, password, gender, dob, city, state, contact, userType } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ status: "User Exists" });
    }

    await User.create({
      fname,
      email,
      password,
      gender,
      dob,
      city,
      state,
      contact,
      userType, 
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// API 2: Login User (Updated to send User Name)
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({ status: "User Not Found" });
    }
    
    if (password === user.password) {
      // SUCCESS: Send token, type, AND first name
      return res.send({ 
        status: "ok", 
        data: user.userType, 
        fname: user.fname // <--- Added this line
      }); 
    }
    res.send({ status: "error", error: "Invalid Password" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// API 3: Admin - Get All Users
app.get("/getAllUsers", async (req, res) => {
  try {
    const allUser = await User.find({}).select("-password");
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

// Start the Server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});