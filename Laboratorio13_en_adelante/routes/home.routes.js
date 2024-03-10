express = require('express');
const router = express.Router();

const homeController = require('../controllers/pokemones.controller');

router.get('/agregar_pokemon', homeController.get_agregar_pokemon);

router.post('/agregar_pokemon', homeController.post_agregar_pokemon);

router.get('/', homeController.get_home);

module.exports = router;