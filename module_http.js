const http = require('http')

const serve = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end('<h1>Uso simples do http nativo do nodeJS...</h1>')
})

const port = 3000
serve.listen(port, function(){
    console.log(`De olha na porta ${port}`)
})