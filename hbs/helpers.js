const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    let res = [];

    palabras.forEach((palabra) => {
        res.push(palabra[0].toUpperCase() + palabra.slice(1));
    })

    return res.join(' ');
});