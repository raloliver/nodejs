//ao declarar uma constante dentro de um módulo, ela não será armazenada como global
const PHI = 1.61
console.log(global.PHI) //undefined

//DOM: window NODE: global
//mesmo assim, ainda é possível declarar o objeto globalmente
global.notify = { tipo: 'Alerta: Objeto Global Identificado!' }