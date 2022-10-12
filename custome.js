var http = require('http');
var dt=require('./myModule.js')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('My custome Module date is : ' + dt.mydate() + "<BR>");
  res.end('Hello World!');
  
}).listen(8080);