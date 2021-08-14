"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      House.belongsTo(models.City, { 
        as: "city",
        foreignKey: {
          name: "city_id",
          // primaryKey: true 
        },
      }); 
      House.hasOne(models.transaction, {
        // hasOne
        as: "transaction",
      foreignKey: {
          name: "id", 
        },
      });
      // House.belongsTo(models.user, {
      //   as: "user",
      //   foreignKey: {
      //     name: "houses_id",
      //     // primaryKey: true 
      //   },
      // });

     
    }
  }
  House.init( 
    {
      city_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      price: DataTypes.INTEGER,
      typeRent: DataTypes.STRING,
      amenities: DataTypes.STRING,
      bedroom: DataTypes.INTEGER,
      bathroom: DataTypes.INTEGER,
      description: DataTypes.STRING,

      image: DataTypes.STRING,
      image1: DataTypes.STRING,
      image2: DataTypes.STRING,
      image3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "House",
      tableName: "houses",
    }
  );
  return House;
};
