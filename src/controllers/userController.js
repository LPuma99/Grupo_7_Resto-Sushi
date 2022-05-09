const {users, writeUsers} = require('../data')

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
        res.send(req.body)
    }
}