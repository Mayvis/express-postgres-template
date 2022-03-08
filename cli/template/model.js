const modelTemplateString = (modelName, repositoryName) => {
  return `'use strict'
const { Model } = require("sequelize");
  
module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: "${repositoryName}",
    tableName: "${modelName}",
    timestamp: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
  };

  class ${repositoryName} extends Model {
    static associate() {}
  }

  /**
   * ------------------------------
   * Init model
   * -------------------------------
   */
  ${repositoryName}.init(
    {
      //
    },
    options
  );

  return ${repositoryName};
};
  `;
};

module.exports = modelTemplateString;
