"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.Products, {
        targetKey: "productId",
        foreignKey: "ProductId",
      });

      this.hasMany(models.OrderItems, {
        sourceKey: "optionId",
        foreignKey: "OptionId",
      });
      this.hasMany(models.OrderOptions, {
        sourceKey: "optionId",
        foreignKey: "OptionId",
      });
    }
  }
  Options.init(
    {
      optionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ProductId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      extra_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      hot: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      shot_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
      modelName: "Options",
    }
  );
  return Options;
};
