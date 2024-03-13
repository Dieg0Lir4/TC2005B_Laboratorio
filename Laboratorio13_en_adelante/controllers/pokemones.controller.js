const Pokemon = require("../models/pokemon.model");

exports.get_home = (req, res) => {
  Pokemon.fetchLastOne().then(([rows, fieldData]) => {
    res.render("home",{
      pokemones: rows,
      ultimoPokemon: req.cookies.ultimopokemon || "No hay pokemones agreagados ultimamente",
      username: req.session.username || "No hay usuario logueado",
    })
  })
  .catch(err => console.log(err));
  
};

exports.get_agregar_pokemon = (req, res) => {
  res.render("agregar_pokemon", {
    username: req.session.username || "No hay usuario logueado",
    csrfToken: req.csrfToken(),
  });
};

exports.post_agregar_pokemon = (req, res) => {
  const pokemon = new Pokemon(req.body.nombre, req.body.tipo, req.body.imagen);
  pokemon.save()
  .then(([rows, fieldData]) => {
    
    res.setHeader("Set-Cookie", "ultimopokemon=" + pokemon.nombre + "; HttpOnly");
    username: req.session.username || "No hay usuario logueado",
    res.redirect("/");
 
  })
  .catch(err => console.log(err));
};

exports.get_pokedex = (req, res) => {
  Pokemon.fetchAll()
  .then(([rows, fieldData]) => {
  res.render("pokedex", {
    pokemones: rows,
    username: req.session.username || "No hay usuario logueado",
  });
}).catch(err => console.log(err));
};

exports.get_profesor = (req, res) => {
  res.render("profesor", {
    username: req.session.username || "No hay usuario logueado",
  });
};

exports.get_tabla_de_tipos = (req, res) => {
  res.render("tabla_de_tipos", {
    username: req.session.username || "No hay usuario logueado",
  });
};

exports.post_modificar_pokemon = (req, res) => {
  
  Pokemon.updateLastOne(req.body.nombre, req.body.tipo, req.body.imagen)
  .then(([rows, fieldData]) => {
    res.redirect("/");
  })
  .catch(err => console.log(err));
};

exports.get_modificar_pokemon = (req, res) => {
  res.render("modificar_pokemon", {
    username: req.session.username || "No hay usuario logueado",
  });
};

exports.get_pokemonByID = (req, res) => {
  const pokeID = req.params.pokeID;
  Pokemon.fetchID(pokeID).then(([rows, fieldData]) => {
    res.render("pokedex", {
      pokemones: rows,
      username: req.session.username || "No hay usuario logueado",
    });
  })
  .catch(err => console.log(err));
};