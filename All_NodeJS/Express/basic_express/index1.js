const express = require('express');
const app = express();

app.get("", (req, resp) => {
	console.log('Data sent by Browser',req.query); // get object
	console.log('Data sent by Browser',req.query.name); // get name
    resp.send("Welcome Index Page : " + req.query.name);
});
app.listen(5000);