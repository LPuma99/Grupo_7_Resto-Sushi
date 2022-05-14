const {users, writeUsers} = require('../data');
const { validationResult } = require('express-validator');
module.exports = {
    profile: (req, res) => res.send ('Futuro Perfil de Usuario'),
    login: (req, res) => {
        res.render ('users/login',{
        title: 'Login'})
    },
    register: (req, res) => {
        res.render('users/registro', {
            titulo: 'Registro'
        })
    },
    processRegister: (req, res) =>{
        //Verificación de posibles errores
        let errors = validationResult(req);
      
        //crea el usuario si no hubo errores
    
        if(errors.isEmpty()){
            

            let lastId = 0;
            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });

            let newUser = {
                id: lastId + 1,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar: req.file ? req.file.filename : "default-image.png"
            }

            // Paso 2 - Guardar el nuevo usuario en el array de usuarios

            users.push(newUser)

            // Paso 3 - Escribir el JSON de usuarios con el array actual

            writeUsers(users)

            // Paso 4 - Devolver respuesta (redirección)

            res.redirect('/usuarios/login')

        }else{
            //Código para mostrar errores
            res.render('users/register', {
                titulo: "Registro",
                /* css: "userForms.css", */
                errors: errors.mapped()
            })
        }
    }
}