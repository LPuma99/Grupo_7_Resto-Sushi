module.exports = (sequelize, DataTypes) => {
    let alias = "";
    let cols = {
        id: {
    
        }
    };
    let config = {}
    
    const Product = sequelize.define(alias,cols,config) 
    
    return Product;
    }