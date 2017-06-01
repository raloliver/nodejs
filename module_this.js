//pra onde o .this aponta ao ser inserido dentro de um módulo?

/*
console.log(global === this) //false
console.log(module === this) //false
console.log(module.exports === this) //true
*/

//ao realizar apenas um require, o node retorna um objeto vazio, a partir do momento que o objeto é exportado, pra quem for requerer o seu módulo

this.saySomething = () => console.log('Something')
//module.exports.saySomething = () => console.log('Something')