'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductType = sequelize.define('ProductType', {
    Name: DataTypes.STRING
  }, {});
  ProductType.associate = function(models) {
    // associations can be defined here
  };
  return ProductType;
};