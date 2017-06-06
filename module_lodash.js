const _ = require('lodash')

const users = [{
        name: 'Antonio',
        email: 'antonio@mail.com',
        items: 6
    }, {
        name: 'Jose',
        email: 'jose@mail.com',
        items: 2
    }, {
        name: 'Maria',
        email: 'maria@mail.com',
        items: 1
    }, {
        name: 'Ana',
        email: 'ana@mail.com',
        items: 3
    }, {
        name: 'João',
        email: 'joao@mail.com',
        items: 4
    }, {
        name: 'Pedro',
        email: 'pedro@mail.com',
        items: 5
    }
]

const average = _.sumBy (users, 'items') / users.length

console.log(average)