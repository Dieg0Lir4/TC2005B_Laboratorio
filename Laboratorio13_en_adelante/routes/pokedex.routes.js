express = require('express');
const router = express.Router();

const homeController = require('../controllers/pokemones.controller');

router.get('/', homeController.get_pokedex);

module.exports = router;