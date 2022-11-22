/*
npm init
npm i async
*/

/*
Parallel Chaining
parallel(tasks, callback): 

The tasks is a collection of functions that runs parallel in practice through I/O switching. 
If any function in the collection tasks returns an error, the callback function is fired. 
Once all the functions are completed, the data is passed to the callback function as an array. 
The callback function is optional.
*/
const async = require('async');

async.parallel([
	(callback) => {
		setTimeout(() => {
			console.log('This is the first function');
			callback(null, 1);
		}, 500);
	},
	(callback) => {
		console.log('This is the second function');
		callback(null, 2);
	}
], (err, results) => {
	if (err) console.error(err);
	console.log(results);
});



/*
series Chaining

series(tasks, callback): Each function in tasks run only after the previous function is completed. 
If any of the functions throw an error, the subsequent functions are not executed and the callback 
is fired with an error value. On completion of tasks, the data is passed into the callback function as an array.
*/
/*
const async = require('async');

async.series([
	(callback) => {
		setTimeout(() => {
			console.log('This is the first function');
			callback(null, 1);
		}, 500);
	},
	(callback) => {
		console.log('This is the second function');
		callback(null, 2);
	}
], (err, results) => {
	if (err) console.error(err);
	console.log(results);
});


*/