const express = require('express')
const server = express()

server.use('/api', function (req, res, next) {
    console.log('Start...')
    next() // geralmente a função next() vai ao final do código, aqui temos apenas um exemplo
    console.log('End...')
})

//ao ocultar o 1º parâmentro, é possível realizar o método por qualquer url
server.use('/api', function (req, res) {
    console.log('Reply...')
    res.send('<h1>USE Method</h1>')
})

//usando o .use, ele mapeia todos os métodos do http (get, put, post, delete), além de receber o 1º parâmetro com início da requisição (prefixo)
server.listen(8000, () => console.log('Ouvindo...'))