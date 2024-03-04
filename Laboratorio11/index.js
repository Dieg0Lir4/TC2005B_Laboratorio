const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


const otrasRutas = require('./routes/rutitas2.js');

app.use('/pokedex',otrasRutas);


const misRutas = require('./routes/rutitas.js');

app.use('/',misRutas);

app.use((request, response, next) => {
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


app.listen(3000);