const express = require('express')
const server = express()

//com o .route é possível encadear e chamar os métodos com os middlewares
//jeito clean de mapear vários métodos para uma mesma url
server.route('/products')
    .get((req, res) => res.send('All Products'))
    .post((req, res) => res.send('Product Add to Cart'))
    .put((req, res) => res.send('Quantity Change'))
    .delete((req, res) => res.send('Item removed from Cart'))

server.listen(8000, () => console.log('Ouvindo...'))