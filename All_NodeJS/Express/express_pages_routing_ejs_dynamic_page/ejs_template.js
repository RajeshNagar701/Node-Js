const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});
//========================  ejs

app.get('/profile',(_,resp)=>{
   resp.render('profile');
});

app.get('/profile_data',(_,resp)=>{
    const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA'
    }
   resp.render('profile_data',{user})
});


app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
});





app.listen(5000);