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
      order.hasOne(models.transaction, {
        // hasOne
        as: "transaction",
      foreignKey: {
          name: "id", 
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
    productsId: DataTypes.INTEGER,
    transactionsId: DataTypes.INTEGER,
    orderQuantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};