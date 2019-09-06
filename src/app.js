require("dotenv").config();

const express = require("express");
const path = require("path");
const compresion = require("compression");
const helmet = require("helmet");

const controller = require("./controller");

const app = express();


const middleware = [helmet(), compresion(), express.json()];

app.use(middleware);

app.use("/api/v1", controller);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.set("PORT", process.env.PORT || 9000);

module.exports = app;