const express = require('express');
const getEstados = require('./getEstados/getEstados');
const getEstadoEspecifico = require('./getEstados/getEstadoEspecifico');
const app = express();

app.get('/', (request, response) =>{


  return response.send("A rota disponível para consulta é /estados")
})

app.get('/estados', (request, response) =>{
  (async (url) => {
    return response.send(await getEstados(url));
  })('https://queimadas.dgi.inpe.br/home/download?id=focos_brasil&time=48h&outputFormat=json&utm_source=landing-page&utm_medium=landing-page&utm_campaign=dados-abertos&utm_content=focos_brasil_48h');
});

app.get('/estadoEspecifico', (request, response) =>{
  //exemplo = /estadoEspecifico/?estado=Acre
  let estado = request.query["estado"];
  let json;
  if(estado){
    json = response.send("ESTADO NOVO É "+ estado);
  }else
    json = response.send("ESTADO É NENHUM");

  (async (url) => {
    // return response.send
    const retorno = await getEstadoEspecifico(url);
  })('https://queimadas.dgi.inpe.br/home/download?id=focos_brasil&time=48h&outputFormat=json&utm_source=landing-page&utm_medium=landing-page&utm_campaign=dados-abertos&utm_content=focos_brasil_48h');
  // return retorno;
  return json;
});

app.listen(3333);
