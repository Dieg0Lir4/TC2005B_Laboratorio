express = require('express');
const router = express.Router();

const homeController = require('../controllers/pokemones.controller');

router.get('/agregar_pokemon', homeController.get_agregar_pokemon);

router.post('/agregar_pokemon', homeController.post_agregar_pokemon);

router.get('/profesor', homeController.get_profesor);

router.get('/tabla_de_tipos', homeController.get_tabla_de_tipos);

router.get('/modificar_pokemon', homeController.get_modificar_pokemon);

router.post('/modificar_pokemon', homeController.post_modificar_pokemon);

router.get('/', homeController.get_home);

module.exports = router;