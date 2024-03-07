const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const ruta1 = require('./routes/ruta1');

const ruta2 = require('./routes/ruta2');



app.use("/", ruta1);

app.use("/pokedex", ruta2);

app.use((request, response, next) => {
    response.status(404);
    response.render('404');
});

app.listen(3000);


