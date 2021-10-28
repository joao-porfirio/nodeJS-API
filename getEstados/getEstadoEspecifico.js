const getEstadoEspecifico = (url) => {
  return new Promise((resolve, reject, array, arrayFiltrado) => {
    const http = require('http'),
    https = require('https');
    let client = http;

    if (url.toString().indexOf("https") === 0) {
        client = https;
    }
    client.get(url, (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        // array = JSON.stringify(data);
        // arrayFiltrado = JSON.parse(data.features)
        // arrayFiltrado = array.filter(x => x.id === "focos_brasil_ontem_hoje_ref.2620e1b4-70f8-31dc-8ee1-4bac7888fc55")
        // var result = data.filter(x => x.estado === "BAHIA" );
        const estado = JSON.parse(data).features[0].properties.estado
        resolve({estado}); 
      })

    }).on("error", (err) => {
        reject(err);
      });
  });
};

const queryData = (query) => {
  return data.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}
module.exports = getEstadoEspecifico;