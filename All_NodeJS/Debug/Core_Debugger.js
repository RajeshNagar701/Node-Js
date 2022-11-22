/*
Core Node.js Debugger
Node.js provides built-in non-graphic debugging tool that can be used on all platforms. 
It provides different commands for debugging Node.js application.

Consider the following simple Node.js application contained in app.js file.
*/
var fs = require('fs');

fs.readFile('test.txt', 'utf8', function (err, data) {
    
    debugger;

    if (err) throw err;
    
    console.log(data);
});

/*
Write debugger in your JavaScript code where you want debugger to stop. 
For example, we want to check the "data" parameter in the above example. So, write debugger; inside callback function as above.

Now, to debug the above application, run the following command.
node debug app.js
*/