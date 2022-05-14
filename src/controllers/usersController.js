const {users, writeUsers} = require('../data');
const { validationResult } = require('express-validator');

module.exports = {
    login: (req, res) => {

        res.render('users/login', {
            titulo: "Login",
            css: "styles.css",
            session: req.session
        })
    }, 
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            
            let user = users.find(user => user.email === req.body.email);
            req.session.user = {
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                email: user.email,
                rol: user.rol
            }

            if(req.body.remember){
                const TIME_IN_MILISECONDS = 60000;
                res.cookie('restoCookie', req.session.user, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                })
            }
            res.locals.user = req.session.user
            res.redirect('/')
        }else{
            
            res.render('users/login', {
                titulo: "Login",
                css: "style.css",
                errors: errors.mapped(),
                session: req.session
            })
        }
    }, 
    register: (req, res) => {

        res.render('users/registro', {
            titulo: "Registro",
            css: "style.css",
            session: req.session
        }) 
    }, 
    processRegister: (req, res) => {
    
        let errors = validationResult(req);
      
       
        if(errors.isEmpty()){
            
            // Paso 1 - Crear un objeto User

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
                avatar: req.file ? req.file.filename : "default-image.png",
                rol: "USER"
            }

            // Paso 2 - Guardar el nuevo usuario en el array de usuarios

            users.push(newUser)

            // Paso 3 - Escribir el JSON de usuarios con el array actual

            writeUsers(users)

            // Paso 4 - Devolver respuesta (redirección)

            res.redirect('/usuarios/login')

        }else{
            //Código para mostrar errores
            res.render('users/registro', {
                titulo: "Registro",
                css: "style.css",
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();

        if(req.cookies.formarCookie){
            res.cookie('restoCookie', "", { maxAge: -1 })
        }

        res.redirect('/')
    }
}









