const express = require('express');

const router = express.Router();

router.use('/registrar-pokemon', (request, response, next) => {
    
    response.render('registrar-pokemon.ejs');
});

router.use('/ver-lista', (request, response, next) => {
    
    response.render('ver-pokemon.ejs', {cuerpo: request.body});
});

router.get('/', (request, response, next) => {
    
    response.render('home.ejs');
});




module.exports = router;

