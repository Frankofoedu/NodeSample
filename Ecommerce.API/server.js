const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const db = require("./Models");
const apiItems = require("./app/api/item");

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

apiItems(app, db);

db.sequelize.sync().then(() => {
  //populate items
  db.Item.bulkCreate(
    times(10, () => ({
      name: faker.commerce.productName()
    }))
  );

  app.listen(8080, () => console.log("App listening on port 8080"));
});
