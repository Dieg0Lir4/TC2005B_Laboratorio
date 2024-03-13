const Usuario = require("../models/usuario.model");
const bcrypt = require("bcryptjs");

exports.get_login = (req, res) => {
  const error = req.session.error || "";
  req.session.error = "";
  res.render("login", {
    username: req.session.username || "No hay usuario logueado",
    registro: false,
    csrfToken: req.csrfToken(),
    error: error,
  });
};

exports.get_register = (req, res) => {
  res.render("singup", {
    username: req.session.username || "No hay usuario logueado",
    registro: true,
    csrfToken: req.csrfToken(),
  });
};

exports.post_register = (req, res) => {
  const nuevo_usuario = new Usuario(req.body.username, req.body.password);

  nuevo_usuario
    .save()
    .then(() => {
      req.session.username = req.body.username;
      res.redirect("/profesor");
    })
    .catch((err) => console.log(err));
};

exports.post_login = (req, res) => {
  Usuario.fetchOne(req.body.username)
    .then(([usuarios, fieldData]) => {
      if (usuarios.length == 1) {
        const usuario = usuarios[0];
        bcrypt
          .compare(req.body.password, usuario.password)
          .then((match) => {
            if (match) {
              req.session.username = req.body.username;
              req.session.isLoggedIn = true;
              res.redirect("/profesor");
            } else {
              req.session.error = "Contraseña incorrecta"
              res.redirect("/perfil/login");
            }
          })
          .catch((err) => console.log(err));
      } else {
        req.session.error = "Usuario no encontrado"
        res.redirect("/perfil/login");
      }
    })
    .catch((err) => console.log(err));
};

exports.get_logout = (request, response, next) => {
  request.session.destroy(() => {
    response.redirect("/perfil/login"); //Este código se ejecuta cuando la sesión se elimina.
  });
};
