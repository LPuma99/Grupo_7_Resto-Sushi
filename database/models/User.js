module.exports = (sequelize, DataTypes) => {
    let alias = "";
    let cols = {
        id: {
    
        }
    };
    let config = {}
    
    const User = sequelize.define(alias,cols,config) 
    
    return User;
    }