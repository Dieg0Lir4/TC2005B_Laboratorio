express = require('express');
const router = express.Router();
const pokedex = require('../util/can-pokedex')

const homeController = require('../controllers/pokemones.controller');

router.get('/', pokedex,homeController.get_pokedex);

router.get('/:pokeID', pokedex,homeController.get_pokemonByID);

module.exports = router;