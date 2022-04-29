require("dotenv").config();
const express = require("express");
const path = require("path");

const routes = require("./routes");
const cors = require("cors");
const { db } = require("./connection");
const { log } = require("console");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
