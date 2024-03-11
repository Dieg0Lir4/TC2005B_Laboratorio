const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));



app.set('view engine', 'ejs');
app.set('views', 'views');

const homeRoutes = require('./routes/home.routes');
const pokedexRoutes = require('./routes/pokedex.routes');

app.use('/', homeRoutes);
app.use('/pokedex', pokedexRoutes);

app.use((req, res, next) => {
    res.status(404).render('404')
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});