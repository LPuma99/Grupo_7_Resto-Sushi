module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
    let cols = {
         categories_id: {
             type: DataTypes.INTEGER,
             allowNull: false,
     },
     name: {
        type: DataTypes.STRING(15),
        allowNull: false,
    }
    };
    let config = {}
    
    const Category = sequelize.define(alias,cols,config) 
    
    return Category;
    }
    