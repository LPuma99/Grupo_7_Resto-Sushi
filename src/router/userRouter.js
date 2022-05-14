const express = require ('express')
const router = express.Router();
const usersController = require ('../controllers/userController')
const uploadFile = require('../middlewares/uploadAvatar');
/* const uploadFile = multer ({storage}) */

router.get('/' , usersController.profile)
router.get('/login' , usersController.login)

router.get('/registro', usersController.register)

router.post('/registro',uploadFile.single('avatar') , usersController.processRegister)


module.exports = router