exports.get_login = (req, res) => {
    res.render('login',{
        username: req.session.email || "No hay usuario logueado",
    });
}

exports.post_login = (req, res) => {
    req.session.email = req.body.username;
    res.redirect('/profesor');
}

