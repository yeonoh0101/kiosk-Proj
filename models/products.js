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

      // Options 모델과 1:N
      this.hasMany(models.Options, {
        sourceKey: "productId",
        foreignKey: "ProductId",
      });
      // OrderItems 모델과 1:N
      this.hasMany(models.OrderItems, {
        sourceKey: "productId",
        foreignKey: "ProductId",
      });
      // ProductOrders 모델과 1:N
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
      ProductName: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      ProductPrice: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
