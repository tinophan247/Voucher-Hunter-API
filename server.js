const express = require("express");
const app = express();
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");
const dotenv = require("dotenv").config();

app.use(express.json());
app.use(dotenv);

//set up static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
  res.setHeader("Access-Control-Allow-Origin", process.env.BASE_URL);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//dùng router
app.use("/api/v1", rootRouter);

//lắng nghe sự kiện kết nối
app.listen(5000, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
