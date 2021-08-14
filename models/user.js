'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.listAs, {
        as: "listas",
        foreignKey: {
          name: "listasid",
          // primaryKey: true 
        },
      });
      user.hasOne(models.transaction, {
        as: "transaction",
      foreignKey: {
          name: "user_id", 
        },
      });
      // user.hasMany(models.House, {
      //   as: "house",
      //   foreignKey: {
      //     name: "houses_id",
      //     // primaryKey: true 
      //   },
      // });

    }
  };
  user.init({
    // id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    fullname: DataTypes.STRING,
    // address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    // gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};