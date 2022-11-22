/*
Writing File
Use fs.writeFile() method to write data to a file. 
If file already exists then it overwrites the existing content otherwise it creates a new file and writes data into it.

fs.writeFile(filename, data[, options], callback)

The following example creates a new file called test.txt and writes "Hello World" into it asynchronously.

*/
/*
var fs = require('fs');

fs.writeFile('test.txt', 'Hello World!', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Write operation complete.');
});

*/
/*

In the same way, use fs.appendFile() method to append the content to an existing file.
Example: Append File Content
*/


var fs = require('fs');

fs.appendFile('testappend.txt', 'hi Hello World!', function (err) { 
        if (err)
        console.log(err);
        else
        console.log('Append operation complete.');
});