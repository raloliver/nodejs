const express = require('express')
const router = express.Router()

//organizar as rotas para reutilizar separadamente em apis diversas ou em outras instâncias do express
//neste exemplo simples, tentamos supor a Performance de uma aplicação com base no tempo da resposta
router.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Performance: ${Date.now() - init} ms.`)
})

//com o : informamos que iremos passar um parâmetro (.params) variável
router.get('/products/:id', (req, res) => {
    res.json({id: req.params.id, name: 'Book'})
})

//o router é um subgrupo, como uma miniapp que usa do express para determinar os métodos e as urls com seus devidos parâmetros
router.get('/users/:id/:name', (req, res) => {
    res.json({id: req.params.id, name: req.params.name})
})

module.exports = router