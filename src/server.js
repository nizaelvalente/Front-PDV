const express = require('express')
const path = require('path')
const server = express()

server.use(express.static('public'))
server.set('view engine', 'ejs')
server.set ('views', path.join(__dirname, 'app'))
server.use(express.json())

server.use('/', require('./app/routes/index.routes.js'))
server.listen(3000, () => {
  console.log('Servidor Ativo!')
  console.log('http://localhost:3000')
})