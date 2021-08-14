'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { 
      transaction.belongsTo(models.user, { 
        as: "user",
        foreignKey: {
          name: "user_id",
        },
      }); 
      transaction.hasMany(models.product, { 
        as: "product",
        foreignKey: {
          name: "id",
        },
      }); 
      transaction.hasMany(models.order, { 
        as: "order",
        foreignKey: {
          name: "transactionsId",
        },
      }); 
     

      // define association here
    }
  };
  transaction.init({
    // id:DataTypes.INTEGER,
    user_id:DataTypes.INTEGER,
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    Phone:DataTypes.INTEGER,
    address:DataTypes.STRING,
    status:DataTypes.STRING,
    postCode:DataTypes.STRING,
    attachment:DataTypes.STRING,
    // orderQuantity:DataTypes.INTEGER,
   
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};