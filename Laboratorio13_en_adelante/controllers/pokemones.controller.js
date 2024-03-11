const Pokemon = require("../models/pokemon.model");

exports.get_home = (req, res) => {
  res.render("home", {
    pokemones: Pokemon.fetchAll(),
  });
};

exports.get_agregar_pokemon = (req, res) => {
  res.render("agregar_pokemon");
};

exports.post_agregar_pokemon = (req, res) => {
  let pokemon = new Pokemon(req.body.nombre, req.body.tipo, req.body.imagen);
  pokemon.save();
  res.redirect("/");
};

exports.get_pokedex = (req, res) => {
  res.render("pokedex", {
    pokemones: Pokemon.fetchAll(),
  });
};

exports.get_profesor = (req, res) => {
  res.render("profesor");
};

exports.get_tabla_de_tipos = (req, res) => {
  res.render("tabla_de_tipos");
};
