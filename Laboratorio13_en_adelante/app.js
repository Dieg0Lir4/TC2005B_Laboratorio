const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const homeRoutes = require('./routes/home.routes');
const pokedexRoutes = require('./routes/pokedex.routes');
const usersRoutes = require('./routes/users.routes');

app.use('/pokedex', pokedexRoutes);
app.use('/perfil', usersRoutes);
app.use('/', homeRoutes);

app.use((req, res, next) => {
    res.status(404).render('404')
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});