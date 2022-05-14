const {check} = require ('express-validator');


let validateRegister = [
    check("name")
        .notEmpty() .withMessage('El nombre es requerido') .bail()
        .isLength({min:2}).withMessage('Ingrese un nombre valido'),
    check("email") 
        .notEmpty().withMessage('El email es requerido').bail()
        .isEmail().withMessage('Ingrese un email valido'),
    check('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({min:8}).withMessage('La Contraseña debe tener por lo menos 8 caracteres')
];

module.exports = validateRegister;