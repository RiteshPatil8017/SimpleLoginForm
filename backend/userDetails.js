const mongoose = require("mongoose");

// This defines the structure of the data we will store
const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    email: { type: String, unique: true }, // unique: true ensures no duplicate emails
    password: String,
    gender: String,
    dob: String,
    city: String,
    state: String,
    contact: String,
    userType: { type: String, default: "User" }, // Default is 'User', we will set 'Admin' manually later
  },
  {
    collection: "UserInfo", // The name of the collection in MongoDB
  }
);

mongoose.model("UserInfo", UserDetailsScehma);