"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: "Todo",
    tableName: "todo",
    timestamp: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
  };

  class Todo extends Model {
    static associate() {}
  }

  /**
   * ------------------------------
   * Init model
   * -------------------------------
   */
  Todo.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    options
  );

  return Todo;
};
