'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Address: DataTypes.STRING,
    PostalCode: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};