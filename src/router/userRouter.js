const express = require ('express')
const router = express.Router();
const usersController = require ('../controllers/userController')

router.get('/' , usersController.profile)
router.get('/login' , usersController.login)

router.get('/registro', usersController.register)

router.post('/registro', usersController.processRegister)


module.exports = router