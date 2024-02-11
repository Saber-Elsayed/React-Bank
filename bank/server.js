const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const apiRoutes = require("./api"); // Import the routes from api.js

const app = express();
const PORT = 5000; // Choose your desired port

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bankapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Use routes from api.js
app.use("/api", apiRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
