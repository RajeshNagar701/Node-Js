const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');


// static page call 
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

//========================  ejs

app.get('/profile',(_,resp)=>{
   resp.render('profile');
});

app.get('/login',(_,resp)=>{
	resp.render('login');
})

app.get('/signup',(_,resp)=>{
	resp.render('signup');
})



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