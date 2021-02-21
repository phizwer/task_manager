const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const TaskRoute = require("../routes/TaskRoute");

dotenv.config();

module.exports = async (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/", (req, res, next) => {
    return res.json({ message: "Hello There" });
  });
  //   app.options("*", cors());
  //   app.use("/images", express.static(path.join(__dirname, "images")));

  //   app.use("/admin", AdminRoute);
  app.use("/tasks", TaskRoute);
  //   app.use(ShoppingRoute);

  return app;
};
