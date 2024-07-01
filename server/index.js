const express = require("express");
const mongoose = require("mongoose");
const app = express();
const classRouter = require("./src/routes/Class");
const studentRouter = require("./src/routes/Student");
const teacherRouter = require("./src/routes/Teacher");
const userRouter = require("./src/routes/User");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.use(classRouter);
app.use(studentRouter);
app.use(teacherRouter);
app.use(userRouter)

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(4000, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Server is running at port no:4000");
    })
    .catch((error) => {
      console.log(error);
    });
});
