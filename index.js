require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const controller = require("./src/controller");
const db = require("./src/db");
const error = require("./src/error-mw");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

db();

app.use("/api/match_data", controller);
app.use(error);

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});

//TODO: Get new RIOT API key every day, or it won't work!