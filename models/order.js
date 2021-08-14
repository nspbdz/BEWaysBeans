'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.transaction, {
        // hasOne
        as: "transaction",
      foreignKey: {
          name: "transactionsId", 
        },
      });
      order.belongsTo(models.product, {
        // hasOne
        as: "product",
      foreignKey: {
          name: "productsId", 
        },
      });

      // order.hasOne(models.product, {
      //   // hasOne
      //   as: "product",
      // foreignKey: {
      //     name: "id", 
      //   },
      // });

      // define association here
    }
  };
  order.init({
    // id: DataTypes.INTEGER,
    transactionsId: DataTypes.INTEGER,
    productsId: DataTypes.STRING,
    orderQuantity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};