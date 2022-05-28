module.exports = (sequelize, DataTypes) => {
    let alias = "";
    let cols = {
        id: {
    
        }
    };
    let config = {}
    
    const Order = sequelize.define(alias,cols,config) 
    
    return Order;
    }