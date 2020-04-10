const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
require("dotenv/config");

// 
app.use(bodyParser.json());   // this runs on any request


// Import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// connect DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to DB")
);

// listen port
app.listen(3000);