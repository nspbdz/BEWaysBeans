'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listAs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      listAs.hasOne(models.user, {
        // hasOne
        as: "user",
      foreignKey: {
          name: "listasid", 
        },
      });
    }
  };
  listAs.init({
    // id: DataTypes.INTEGER,
    name: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'listAs',
  });
  return listAs;
};