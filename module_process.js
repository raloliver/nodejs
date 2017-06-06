//abaixo vc tem um recurso nativo do node onde o mesmo recebe todos os parâmetros passados na chamada desde arquivo por exemplo
/*
console.log(process.argv)
*/

function requireCommand (command) {
    return process.argv.indexOf(command) !== -1
}

if(requireCommand('--production')){
    console.log('E então, realizou todos os testes?')
} else {
    console.log('Pode ir brincar no playground!')
}