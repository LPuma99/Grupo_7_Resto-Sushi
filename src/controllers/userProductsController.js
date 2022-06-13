const { products } = require('../data');
const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        db.Producto.findAll()
            .then((productos) => {
                res.send(productos)
            })
    },
    detail: (req, res) => {
     let productId = +req.params.id;
     let producto = products.find(product => product.id === productId);
     res.render("products/productDetail", {
         css: "productDetail.css",
         titulo:"Detalle de producto",
         producto,
         session: req.session
     })
    },
};