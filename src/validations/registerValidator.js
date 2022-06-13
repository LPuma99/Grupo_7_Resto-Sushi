const { check, body } = require('express-validator')
const req = require('express/lib/request')
const { users } = require('../data')
const db = require('../database/models')

let validateRegister = [
  check('name')
    .notEmpty()
    .withMessage('Nombre Requerido')
    .bail()
    .isLength({ min:4 })
    .withMessage('Ingrese un nombre válido'),
  check('email')
    .notEmpty()
    .withMessage('Email Requerido')
    .isEmail()
    .withMessage('Ingrese un email válido'),
  
    
  check('password')
    .notEmpty()
    .withMessage('Ingrese una contraseña')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener 8 caracteres'),
]

module.exports = validateRegister
