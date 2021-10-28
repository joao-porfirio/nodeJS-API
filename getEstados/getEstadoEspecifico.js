const getEstadoEspecifico = (url) => {
  return new Promise((resolve, reject) => {
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
        resolve(JSON.parse(data).features.properties);
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