const fs = require('fs')
//__dirname: const padrão do nodejs
const myModules = fs.readdirSync(__dirname)
//forEach para listar todos os arquivos da pasta
myModules.forEach(file => console.log(file))