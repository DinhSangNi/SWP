const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

// Use dotenv
dotenv.config();
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Successfully Connected");
    }).catch(() => {
        console.log("Failed Connected");
    });

// Use dependencies
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

app.listen(8000, () => {
    console.log("server is running");
});