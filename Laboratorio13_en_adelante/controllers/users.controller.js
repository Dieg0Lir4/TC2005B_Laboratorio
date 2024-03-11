exports.get_login = (req, res) => {
    res.render('login',{
        username: req.session.email || "No hay usuario logueado",
    });
}

exports.post_login = (req, res) => {
    req.session.email = req.body.username;
    res.redirect('/profesor');
}

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/perfil/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
}