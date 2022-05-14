const { check, body } = require('express-validator');
const {users} = require('../data');

let validateRegister = [
    check("name")
        .notEmpty().withMessage('Nombre Requerido').bail()
        .isLength({ min:2 }).withMessage('Ingrese un nombre válido'),
    check("email")
        .notEmpty().withMessage("Email Requerido").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    body("email").custom((value)=>{
        let user = users.find(user => user.email === value);
        if(user){
            return false;
        }
        return true;
    }).withMessage("Email ya registrado"),
    check("password")
        .notEmpty().withMessage("Ingrese una contraseña")
        .isLength({min: 8}).withMessage("La contraseña debe tener 8 caracteres"), 

];

module.exports = validateRegister;