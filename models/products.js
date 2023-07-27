"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.Options, {
        sourceKey: "productId",
        foreignKey: "ProductId",
      });
      this.hasMany(models.OrderItems, {
        sourceKey: "productId",
        foreignKey: "ProductId",
      });
      this.hasMany(models.ProductOrders, {
        sourceKey: "productId",
        foreignKey: "ProductId",
      });
    }
  }
  Products.init(
    {
      productId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM("coffee", "juice", "dessert"),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
