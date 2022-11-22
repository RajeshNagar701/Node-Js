//Example: Load and Use Core http Module

var http = require('http');

var server = http.createServer(function(req, res){

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('My custome Module date is :');
  
}).listen(5000); 

//server.listen(5000); 
