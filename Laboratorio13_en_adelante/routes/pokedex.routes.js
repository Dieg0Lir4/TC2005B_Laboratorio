express = require('express');
const router = express.Router();

const homeController = require('../controllers/pokemones.controller');

router.get('/', homeController.get_pokedex);

router.get('/:pokeID',homeController.get_pokemonByID);

module.exports = router;