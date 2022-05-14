const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const usersController = require('../controllers/usersController');
const uploadFile = require('../middlewares/uploadAvatar');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const userInSessionCheck = require('../middlewares/userInSessionCheck');
=======
const usersController = require ('../controllers/userController')
const uploadFile = require('../middlewares/uploadAvatar');
/* const uploadFile = multer ({storage}) */
>>>>>>> 065535912579cbc4d212a19649674ebc11530b63

/* GET - Renderiza vista login */
router.get('/login', userInSessionCheck, usersController.login);
/* POST - Loguea al usuario */
router.post('/login', loginValidator, usersController.processLogin);
/* GET - Renderiza vista registro */
router.get('/registro', userInSessionCheck, usersController.register);
/* POST - Crea un nnuevo usuario */
router.post('/registro', uploadFile.single('avatar'), registerValidator, usersController.processRegister)
/* GET - Logout */
router.get('/logout', usersController.logout);

<<<<<<< HEAD
module.exports = router;
=======
router.get('/registro', usersController.register)

router.post('/registro',uploadFile.single('avatar') , usersController.processRegister)


module.exports = router
>>>>>>> 065535912579cbc4d212a19649674ebc11530b63
