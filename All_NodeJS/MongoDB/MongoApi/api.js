const dbConnect = require('./mongodb'); // connection file load
const express = require('express'); 
const mongodb = require('mongodb');
const app = express();

app.use(express.json()); // when you request or post body data then use 


//Get Data/get API     GET :  http://localhost:5000/
app.get('/', async (res, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});


/*
//Insert/post API      POST :  http://localhost:5000/
/*
//send data from postman body->row->json
app.post("/",(req, resp) => {
	console.log(req.body);
	resp.send({result:"insert"})
}
*/
/*
app.post("/", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insert(req.body)
    resp.send(result)

})
*/

/*
//Update/PUT API        PUT :  http://localhost:5000/raj nagar

/*
//update data from postman body->row->json   
app.put("/",(req, resp) => {
	console.log(req.body);
	resp.send({result:"Updated"})
}
*/
/*   
app.put("/:name", async (req, resp) => {
    const data = await dbConnect();
    let result = data.updateOne(
        { name: req.params.name },// UPDATE FROM Parameter 
        { $set: req.body }
    )
    resp.send({ status: "updated" })
})
*/


/*
//Delete API              Delete :  http://localhost:5000/sd13sad41sad3413
app.delete("/:id", async (req,resp)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})
*/


app.listen(5000)