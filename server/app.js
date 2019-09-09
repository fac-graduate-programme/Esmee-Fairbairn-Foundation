require("dotenv").config();

const express = require("express");
const path = require("path");
const compresion = require("compression");
const helmet = require("helmet");

const controller = require("./controller");

const middlewares = [helmet(), compresion(), express.json()];

const app = express();

app.set("PORT", process.env.PORT || 9000);
app.use(middlewares);
app.use("/api/v1", controller);
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.use((err, req, res, next) => {
  console.log(req.path, err);
  res.status(500).send({ error: 'Internal Server Error', statusCode: 500 });
});

module.exports = app;
