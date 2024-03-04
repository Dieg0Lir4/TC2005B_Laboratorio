const express = require('express');

const router = express.Router();

router.use('/registrar-pokemon', (request, response, next) => {

    console.log('Ingresó a registrar-pokemon');
    response.send(`<a href="/">Hola, aqui pondria el formulario para registrar un pokemon... Si tuviera uno</a>`);
});

router.use('/', (request, response, next) => {

    console.log('Ingresó a ver-lista');
//HTML DE POKEDE
    response.send(`
    <!DOCTYPE >
    <html>
      <head>
        <title>Pokedex</title>
        <meta charset="utf-8" />
        <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
            <div class="bg-gray-100">
                <div class="bg-red-600 p-4">
                    <a href="/">
                        <img src="https://img.icons8.com/ios/452/pokeball--v1.png" class="w-10 h-10" />
                    </a>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="w-1/2 bg-white p-4 rounded-lg shadow-lg">
                    <h1 class="text-2xl font-bold text-center">Pokedex</h1>
                    <p class="text-center">Bienvenido a la Pokedex</p>
                    <a
                        class="block text-center text-red-600 hover:text-red-800"
                        href="/pokedex/registrar-pokemon"
                        >
                        Registrar Pokemon
                    </a>
                </div>
            </div>
            </body>
            </html>`);
});

router.use((request, response, next) => {
    response.status(404);
    response.send(`<!DOCTYPE>
    <html>
      <head>
        <title>404</title>
        <meta charset="utf-8" />
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
        <body>
            <div class="bg-gray-100">
            <div class="bg-red-600 p-4">
                <img src="https://img.icons8.com/ios/452/pokeball--v1.png" class="w-10 h-10" />
            </div>
                <div class="flex justify-center">
                    <div class="w-1/2 bg-white p-4 rounded-lg shadow-lg">
                    <h1 class="text-2xl font-bold text-center">404</h1>
                    <p class="text-center">Página no encontrada</p>
                    <a
                        class="block text-center text-red-600 hover:text-red-800"
                        href="/"
                        >
                        Regresar
                        </a>                
                    </div>
                </div>
            </div>
        </body>
    </html>`);
});

module.exports = router;

