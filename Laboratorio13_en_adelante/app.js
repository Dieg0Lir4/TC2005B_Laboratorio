const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine', 'ejs');
app.set('views', 'views');

const homeRoutes = require('./routes/home.routes');

app.use('/', homeRoutes);

app.use((req, res, next) => {
    res.status(404).render('404')
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});