const express = require('express')
const server = express()

server.get('/', function (req, res, next) {
    console.log('Start...')
    next() // geralmente a função next() vai ao final do código, aqui temos apenas um exemplo
    console.log('End...')
})

server.get('/', function (req, res) {
    console.log('Reply...')
    res.send('<h1>middleware 2</h1>')
})

server.listen(8000, () => console.log('Ouvindo...'))