const http = require('http'); 

const data = require('./data');

var server = http.createServer(function (req, res) {   
   
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(data));  
            res.end();  
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')