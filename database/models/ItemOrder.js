module.exports = (sequelize, DataTypes) => {
    let alias = "";
    let cols = {
        id: {
    
        }
    };
    let config = {}
    
    const ItemOrder = sequelize.define(alias,cols,config) 
    
    return ItemOrder;
    }