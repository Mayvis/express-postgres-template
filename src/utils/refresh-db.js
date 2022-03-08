const { sequelize } = require("../database/models");

const refreshDB = async () => {
  try {
    const tableNames = Object.keys(sequelize.models);

    for (let i = 0; i < tableNames.length; i++) {
      await sequelize.query(`DELETE FROM ${tableNames[i]}`);
    }
  } catch (error) {
    console.log(`clean database error: ${error}`);
  }
};

module.exports = refreshDB;
