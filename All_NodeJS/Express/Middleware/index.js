const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');

/*

// middleware  Application-level middleware   // work on all routes 

const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }
}

app.use(reqFilter); // by this work on all application route



//http://localhost:5000/login?age=17

*/

// Router-level middleware // on particular url or group url


const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }
}

app.get('/' ,(_,resp)=>{
   resp.render('profile');
});

// purticular route
app.get('/login',reqFilter,(_,resp)=>{
	resp.render('login');
})

app.get('/signup',(_,resp)=>{
	resp.render('signup');
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
});


/*
// if want add multiple routes so easy method apply below code  and also create diff file for middleware


const reqFilter= require('./middleware');  // create diff module for middleware
const route= express.Router();

route.use(reqFilter)

// use roaute insted of app.get
route.get('/login',reqFilter,(_,resp)=>{
	resp.render('login');
})

route.get('/signup',(_,resp)=>{
	resp.render('signup');
})

*/

app.listen(5000);