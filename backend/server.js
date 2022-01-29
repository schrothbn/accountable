// Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// Config
require("dotenv").config();

// MongoDB-Connection
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log(`MongoDB database connected successfully`);
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const accountRouter = require("./routes/accounts");
const userRouter = require("./routes/users");

app.use("/accounts", accountRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
