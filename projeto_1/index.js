const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.lerDiretorio(caminho)
    // .then
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(console.log)