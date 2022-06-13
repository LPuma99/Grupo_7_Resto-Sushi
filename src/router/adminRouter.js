const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin/adminController');
const adminProductsController = require('../controllers/admin/adminProductsController');
const uploadFile = require('../middlewares/uploadProductImage');
const productCreateValidator = require('../validations/productCreateValidator');
const userSessionCheck = require('../middlewares/userSessionCheck');
const adminCheck = require('../middlewares/adminCheck');

router.get('/', userSessionCheck, adminCheck, adminController.index);


/* GET - Lista de productos */
router.get('/productos', adminProductsController.list);
/* GET - Agregar producto */
router.get('/productos/agregar', adminProductsController.productAdd);
/* POST - Crea un producto en la DB */
router.post('/productos', uploadFile.single('image'),productCreateValidator, adminProductsController.productCreate);
/* GET - Editar producto */
router.get('/productos/editar/:id', adminProductsController.productEdit);
/* PUT - Actualiza producto en la DB */
router.put('/productos/:id', adminProductsController.productUpdate);
/* DELETE - Elimina un producto */
router.delete('/productos/eliminar/:id', adminProductsController.productDelete);


module.exports = router;