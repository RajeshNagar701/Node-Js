
var fs = require('fs');

//var data = fs.writeFileSync('dummyfile.txt', 'writecode');
const input=process.argv;
fs.writeFileSync(input[2],input[3]);
