module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = {
     product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      descripcion: {
        type: DataTypes.STRING(99),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      stock: {
        type: DataTypes.tinyint(1),
        allowNull: true,
      },
      categori_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    };
    let config = {
      tableName: "products",
      timestamp: true,
    };
  
    const Product = sequelize.define(alias, cols, config);
  
    return Product;
  };