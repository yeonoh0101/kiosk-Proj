"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Items.init(
    {
      itemid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      optionid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM,
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Items",
    }
  );
  return Items;
};
