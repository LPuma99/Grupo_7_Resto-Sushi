module.exports = {
    profile: (req, res) => res.send ('Futuro Perfil de Usuario'),
    login: (req, res) => res.render ('users/login'),
    register: (req, res) => res.render('users/registro')
}