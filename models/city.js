"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      City.hasOne(models.House, {
        // hasOne
        as: "house",
      foreignKey: {
          name: "city_id", 
        },
      });
    }
  }
  City.init(
    {
      // id: DataTypes.INTEGER,
      name: DataTypes.STRING, 
    },
    {
      sequelize,
      modelName: "City",
      tableName: "city",
    }
  );
  return City;
};
