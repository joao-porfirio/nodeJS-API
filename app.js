const express = require('express');
const getEstados = require('./getEstados/getEstados');
const app = express();
const PORT = process.env.PORT || 8877;

app.get('/', (request, response) =>{

  return response.send("A rota disponivel para consulta é /estados para listagem completa")
})

app.get('/estados', (request, response) =>{
  (async (url) => {
    return response.send(await getEstados(url));
  })('https://queimadas.dgi.inpe.br/home/download?id=focos_brasil&time=24h&outputFormat=json&utm_source=landing-page&utm_medium=landing-page&utm_campaign=dados-abertos&utm_content=focos_brasil_24h');
});

app.listen(PORT, ()=>{
})
