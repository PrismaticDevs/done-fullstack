require("dotenv").config();
const express = require("express");

const routes = require("./routes");
const cors = require("cors");
const { db } = require("./connection");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => console.log(`App listening on ${PORT}`));