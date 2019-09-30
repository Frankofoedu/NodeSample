module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Name: { type: DataTypes.TEXT, allowNull: false },
      Price: DataTypes.INTEGER,
      Description: DataTypes.TEXT,
      Image: DataTypes.TEXT
    },
    { freezeTableName: true }
  );
  return Item;
};
