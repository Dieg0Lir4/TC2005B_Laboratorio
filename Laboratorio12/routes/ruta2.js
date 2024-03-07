const express = require('express');

const router = express.Router();

router.use('/registrar-pokemon' , (request, response, next) => {
    response.render('registrar-pokemon2');
});

router.get('/', (request, response, next) => {
    
    response.render('pokedex');
});

module.exports = router;