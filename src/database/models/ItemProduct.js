module.exports = (sequelize, DataTypes) => {
    let alias = "ItemProduct";
    let cols = {
      itemsorder_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cant: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orders_id: {
        type: DataTypes.INTEGER,
      },
      product_id: {
        type: DataTypes.INTEGER,
      }
    };
    let config = {
      tableName: "items_order",
      timestamp: true,
    };
  
    const ItemProduct = sequelize.define(alias, cols, config);
  
    return ItemProduct;
  };