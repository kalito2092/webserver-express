const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//_dirname: variable de entorno que se encarga de concatenar toda la url desde el root 
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'carlos',
    });

})

app.get('/about', (req, res) => {
    res.render('about');

})

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
})