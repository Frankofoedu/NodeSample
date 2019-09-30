const { Sequelize } = require("sequelize");

//const path = "mysql://Frank-pc:Holygrail0612?@localhost:3306/ecommerce";
//const sequelize = new Sequelize(path, { operatorsAliases: false });
//14436


let Dummy = (new Sequelize).define("dummy", {
  description: Sequelize.STRING
});

Dummy.sync()
  .then(() => {
    console.log("New table created");
  })
  .finally(() => {
    sequelize.close();
  });
