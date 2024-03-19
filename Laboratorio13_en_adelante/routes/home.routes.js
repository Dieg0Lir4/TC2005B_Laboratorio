express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canAdd = require('../util/can-add');
const canProfesor = require('../util/can-profesor.js');
const canTabla = require('../util/can-tabla');



const homeController = require('../controllers/pokemones.controller');

router.get('/agregar_pokemon', isAuth, canAdd, homeController.get_agregar_pokemon);

router.post('/agregar_pokemon', isAuth, homeController.post_agregar_pokemon);

router.get('/profesor', isAuth, canProfesor, homeController.get_profesor);

router.get('/tabla_de_tipos', isAuth, canTabla, homeController.get_tabla_de_tipos);

router.get('/modificar_pokemon', isAuth, homeController.get_modificar_pokemon);

router.post('/modificar_pokemon', isAuth, homeController.post_modificar_pokemon);

router.get('/', homeController.get_home);

module.exports = router;