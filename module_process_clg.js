//usando a sainda padrão (stdout) eu consigo chamar o método .write para escrever
process.stdout.write('E ai, vai chorar agora ou depois?')
//devemos usar o data mesmo, pois é o parâmetro padrão para captura de dados de entrada
process.stdin.on('data', function(data) {
    process.stdout.write(`Então, agora eu já sei que você disse: ${data.toString()}`)
    process.exit()
})