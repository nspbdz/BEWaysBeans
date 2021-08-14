'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.hasOne(models.transaction, {
        // hasOne
        as: "transaction",
      foreignKey: {
        name: "id", 
        },
      });
      product.hasOne(models.order, {
        as: "order",
        foreignKey: {
          name: "id",
          // primaryKey: true 
        },
      });
      // product.belongsTo(models.order, {
      //   as: "order",
      //   foreignKey: {
      //     name: "ordersId",
      //     // primaryKey: true 
      //   },
      // });
    } 
  };
  product.init({
    
    // id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};