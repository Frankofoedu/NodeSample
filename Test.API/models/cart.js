'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    ClientId: DataTypes.STRING,
    ProductId: DataTypes.INTEGER,
    Amount: DataTypes.INTEGER,
    DatePurchased: DataTypes.DATE,
    IsInCart: DataTypes.BOOLEAN
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};