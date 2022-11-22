const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')


// app.use access page from public
//app.use(express.static(publicPath)); get page in url localhost:5000/about.html


// set route and get page on it

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
});

app.listen(5000);