const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
//create

// fs.writeFileSync(filePath,'this is a simple file');


// read

// fs.readFile(filePath,'utf8',(err,item)=>{
// console.log(item);
// })

// update

// fs.appendFile(filePath,' for fruits',(err)=>{
// if(!err) console.log("file is updated")
// })

// rename

// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })  

// Delete
fs.unlinkSync(`${dirPath}/fruit.txt`);