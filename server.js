const express = require('express')
const app = express()

const hbs = require('hbs')

require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

//express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//agregamos los helpers
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    //res.send('hola mundo')
    res.render('home', {
        nombre: 'oscar ivan arcia llanos',
    })
});

app.get('/about', (req, res) => {
    //res.send('hola mundo')
    res.render('about', {
        nombre: 'Extraño',
    })
});
//
//app.get('/data', (req, res) => {
//    res.send('Hola data');
//});



app.listen(port, () => {
    console.log(`servidor exprees on port ${port}`)
})