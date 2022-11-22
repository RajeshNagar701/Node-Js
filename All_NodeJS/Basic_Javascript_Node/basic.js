const app=require('./app');
console.log(app);
console.log(app.x);
console.log(app.z());


var arr=[5,7,8,9,10];
arr.filter((item)=>{
    console.log(item);
    // return item>4;
})


// check dir
console.log("->>",__dirname);
