const express = require('express')
const server = express()
const router = require('./express_router')

server.use('/api', router) //http://localhost:8000/api/users/32 ou http://localhost:8000/api/products/5002

server.listen(8000, () => console.log('Ouvindo...'))