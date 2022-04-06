const express = require ('express')
const router = express.Router();
const usersController = require ('../controllers/userController')

router.get('/' , usersController.login)

router.get('/registrarse', usersController.register)


module.exports = router