module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
     id: {
          type: dataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      name: {
          type: dataTypes.STRING(45),
          allowNull: false,
      },
      price: {
          type: dataTypes.INTEGER(11),
          allowNull: false,
      },
      discount: {
          type: dataTypes.INTEGER(11),
      },
      category_id: {
          type: dataTypes.INTEGER(11),
          allowNull: false,
      },
      stock: {
          type: dataTypes.BOOLEAN,
          allowNull: false,
      },
      description: {
          type: dataTypes.TEXT,
          allowNull: false,
      },
      image:{
          type: dataTypes.STRING(200),
          allowNull: false,
      }
  }
  let config = {
      tableName: "Product",
      timestamps: false,
  }

  const Product = sequelize.define(alias, cols, config);

/* 
  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "product_id"
    })

  } */
  return Product;
}