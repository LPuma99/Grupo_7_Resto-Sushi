const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productController')


/* Ruta para listar productos */
router.get('/', productController.products)


router.get('/detalle', productController.product)

router.get('/carrito', productController.carrito)

/* router.get('/', (req, res) => {
    res.send("Pagina de productos")
})

router.get ('/detalle/:id', (req, res) => {
    res.send("detalle de producto")
}) */

module.exports = router