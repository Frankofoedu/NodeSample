const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const db = require("./Models");
//const apiItems = require("./app/api/item");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: app.use(bodyParser.json()) }));

//require("./api/productRoutes")(app);

//app.get("/itemss", (req, res) => res.send("Hello WOrld"));
app.listen(port, () => console.log(`server was started on port ${port}`));
