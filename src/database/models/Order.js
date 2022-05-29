module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
      orders_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    };
    let config = {
      tableName: "orders",
      timestamp: true,
    };
  
    const Order = sequelize.define(alias, cols, config);
  
    return Order;
  };