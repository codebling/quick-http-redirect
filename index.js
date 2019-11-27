const http = require('http');

module.exports = http.createServer((req, res) => {
  res.statusCode = 301;
  res.statusMessage = 'Moved Permanently';
  res.setHeader('Location', 'https://' + req.headers.host + req.url);
  res.end();
});


