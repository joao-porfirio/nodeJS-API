const getEstados = (url) => {
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
          resolve(JSON.parse(data).features);
      });

    }).on("error", (err) => {
        reject(err);
      });
  });
};

module.exports = getEstados;