module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
    let cols = {
         categories_id: {
             type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false,
     },
     name: {
        type: DataTypes.STRING(15),
        allowNull: false,
    }
    };
    let config = {
        tableName: "categories",
        timestamp: true,
    }
    
    const Category = sequelize.define(alias,cols,config) 
    
    return Category;
    }
    