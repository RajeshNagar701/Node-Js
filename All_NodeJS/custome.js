var http = require('http');
var dt=require('./myModule.js')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});  // response
  res.write('My custome Module date is : ' + dt.mydate() + "<BR>"); // print
  res.end('Hello World!');  // end write
  
}).listen(8080);