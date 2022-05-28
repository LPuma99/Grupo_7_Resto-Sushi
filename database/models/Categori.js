module.exports = (sequelize, DataTypes) => {
let alias = "";
let cols = {
    id: {

    }
};
let config = {}

const Categori = sequelize.define(alias,cols,config) 

return Categori;
}