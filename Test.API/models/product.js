'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    TypeId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Price: DataTypes.DOUBLE,
    Description: DataTypes.STRING,
    Image: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};