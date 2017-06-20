const express = require('express')
const server = express()

/**
 * server: instância do express
 * .get: método http
 * 1º parâmetro: url onde será realizada a requisição
 * 2º parâmetro: função middleware
 */

server.get('/', function (req, res) {
    res.send('<h1>Index!</h1>') //na maioria das vezes, o send envia um HTML completo
})

server.all('/login', function (req, res) {
    res.send('<mark>Realize o login</mark>') //é possível usar todos os métodos http com o .all
})

//sempre que na url conter api (com uma expressão regular), faço algo
server.get(/api/, function(req, res){
    res.send('<em>API AQUI!</em>')
})


server.listen(8000, () => console.log('Ouvindo...'))