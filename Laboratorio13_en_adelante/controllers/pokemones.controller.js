const Pokemon = require("../models/pokemon.model");

exports.get_home = (req, res) => {
  res.render("home", {
    pokemones: Pokemon.fetchAll(),
    ultimoPokemon:
      req.cookies.ultimopokemon || "No hay pokemones agreagados ultimamente",
    username: req.session.email || "No hay usuario logueado",
  });
};

exports.get_agregar_pokemon = (req, res) => {
  res.render("agregar_pokemon", {
    username: req.session.email || "No hay usuario logueado",
  });
};

exports.post_agregar_pokemon = (req, res) => {
  let pokemon = new Pokemon(req.body.nombre, req.body.tipo, req.body.imagen);
  pokemon.save();
  res.setHeader("Set-Cookie", "ultimopokemon=" + pokemon.nombre + "; HttpOnly");
  username: req.session.email || "No hay usuario logueado",
  res.redirect("/");
};

exports.get_pokedex = (req, res) => {
  res.render("pokedex", {
    pokemones: Pokemon.fetchAll(),
    username: req.session.email || "No hay usuario logueado",
  });
};

exports.get_profesor = (req, res) => {
  res.render("profesor", {
    username: req.session.email || "No hay usuario logueado",
  });
};

exports.get_tabla_de_tipos = (req, res) => {
  res.render("tabla_de_tipos", {
    username: req.session.email || "No hay usuario logueado",
  });
};
