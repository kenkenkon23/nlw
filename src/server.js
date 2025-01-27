//importar dependencias (libs)
const express = require('express');
const path = require('path');
const pages = require('./pages.js')
//iniciando o express (lib)
const server = express();

server
//usar body do req
.use(express.urlencoded({extended: true}))
//usar arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5500);

//control C no bash desliga o servidor
//npm install express
//npm install nodemon
//npm install hbs

//npm start