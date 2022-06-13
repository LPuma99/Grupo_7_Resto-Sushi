module.exports = (sequelize, DataTypes) => {
  let alias = 'items_order'
  let cols = {
    id: {
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
    },
  }
  let config = {
    tableName: 'items_order',
    timestamp: false,
  }

  const ItemProduct = sequelize.define(alias, cols, config)

  /* ItemProduct.associate = (models) => {
    ItemProduct.belongsToMany(models.Product, {
      as: 'Producto',
      through: 'items_order',
      foreignKey: 'product_id',
      otherKey: 'orders_id',
      timestamps: false,
    }),
      /*Esto probablemente este mal */

      /* ItemProduct.belongsToMany(models.Order, {
        as: 'Items',
        through: 'items_order',
        foreignKey: 'orders_id',
        otherKey: 'orders_id',
        timestamps: false,
      })
  } */ 

  return ItemProduct
}
