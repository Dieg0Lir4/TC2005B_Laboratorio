const Pokemon = require('../models/pokemon.model')

exports.get_home = (req, res) => {
    res.render('home', {
        pokemones: Pokemon.fetchAll()
    });
}

exports.get_agregar_pokemon = (req, res) => {
    res.render('agregar_pokemon');
}

exports.post_agregar_pokemon = (req, res) => {

        let pokemon = new Pokemon(req.body.nombre, req.body.tipo, req.body.imagen);
        pokemon.save();

    
    res.redirect('/');
}

