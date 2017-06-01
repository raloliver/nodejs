const utils = require('./module_util')

const singletonOne = require('./module_singleton')
const singletonTwo = require('./module_singleton')

const thisThis = require('./module_this')


console.log(utils.uppercase('essa são as próximas 4 semanas'))
//independe de usar const diferentes, ambos apontam para o mesmo estado
//caso precise realmente de uma nova instância, declare dentro de uma função
singletonOne.nextWeek()
singletonTwo.nextWeek()
singletonOne.nextWeek()
singletonTwo.nextWeek()

thisThis.saySomething()