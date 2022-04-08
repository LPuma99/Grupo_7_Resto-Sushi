module.exports = {
    profile: (req, res) => res.send ('Futuro Perfil de Usuario'),
    login: (req, res) => res.render ('login'),
    register: (req, res) => res.render('registro')
}