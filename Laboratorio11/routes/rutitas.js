const express = require('express');

const router = express.Router();


router.get('/registrar-pokemon', (request, response, next) => {
    
    response.send(`<!DOCTYPE >
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
                <form action="/ver-lista" method="POST" class="w-1/2 bg-white p-4 rounded-lg shadow-lg">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Nombre
                    </label>
                    <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="type">
                    Tipo
                    </label>
                    <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="type"
                    name="type"
                    type="text"
                    placeholder="Tipo"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="weight">
                    Peso
                    </label>
                    <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="weight"
                    name="weight"
                    type="text"
                    placeholder="Peso"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                    Descripción
                    </label>
                    <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    name="description"
                    placeholder="Descripción"
                    ></textarea>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
                    Imagen
                    </label>
                    <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    type="text"
                    name="image"
                    placeholder="Imagen"
                    />
                <div class="flex items-center justify-between">
                    <button
                    class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" value="Guardar"
                    >
                    Guardar
                    </button>
                    </div>
                </form>
                    <a
                    class="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
                    href="/"
                    >
                    Regresar
                    </a>                
        </div>
    
      </body>
      
    </html>`);
});

router.post('/ver-lista', (request, response, next) => {

    cuerpo = request.body;
    
    
   response.send(`<!DOCTYPE >
<html>
  <head>
    <title>Pokedex</title>
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
                <h1 class="text-2xl font-bold text-center">${cuerpo.name}</h1>
                <p class="text-center">Tipo: ${cuerpo.type}</p>
                <p class="text-center">Peso: ${cuerpo.weight} kg</p>
                <p class="text-center">Descripción: ${cuerpo.description}</p>
                <img src="${cuerpo.image}" class="mx-auto" />
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


router.get('/', (request, response, next) => {
    response.send(`<!DOCTYPE >
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
                <div class="flex justify-center">
                    <div class="w-1/2 bg-white p-4 rounded-lg shadow-lg">
                    <h1 class="text-2xl font-bold text-center">Pokedex</h1>
                    <div class="flex justify-center">
                        
                            <a href="/registrar-pokemon"  class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Registrar Pokemon
                            </a>
                        
                        <a
                        class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        href="pokedex/registrar-pokemon.html"
                        >
                        Pokedex
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </body>
    </html>`); 
    
});



module.exports = router;