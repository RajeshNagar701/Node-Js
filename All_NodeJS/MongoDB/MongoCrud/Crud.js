
const dbConnect= require('./mongodb');


/*
// read data 1 method
dbConnect().then((resp)=>{
resp.find({name:'Raj'}).toArray().then((data)=>{
console.log(data)
})
})
*/


// read all data 2 method
/*
const alldata=async ()=>{
   let data = await dbConnect();
   data = await data.find().toArray();
   console.log(data)
}
alldata()

*/

/*
// read particular data 2 method
const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'Raj'}).toArray();
   console.log(data)
}
main()
*/

// Insert data or Multiple Insert Data ===============================================================
/*
const insertData=async ()=>{
   let data = await dbConnect();
   let result = await data.insert(
      [
          {name:'patel',age:42,email:'akash@gmail.com',password:'1234',mobile:'975521455'},
          {name:'patel12',age:42,email:'patel@gmail.com',password:'1234',mobile:'975521455'},
          {name:'mihir254',age:42,email:'mihir@gmail.com',password:'1234',mobile:'975521455'},

      ]
  )
  // console.log(result);
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

//insertData()

*/

//Update data();  .update() / .updateOne() =============================================
/*
const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.update(
        { name:'akash'},
        {
            $set:{name:'akash Nagar', mobile:8854587845}
        }
        )
    console.log(result)
	
		if(result.acknowledged)
		{
		  console.warn("data is Updated")
		}
}

updateData();
*/


// Delete data .deleteOne()/.deleteMany() ========================================

/*
const deleteData=async ()=>{
let data = await dbConnect();
let result = await data.deleteMany({name:'patel'})
console.log(result)
	if(result.acknowledged)
	{
	  console.warn("data is Deleted")
	}
}
 
deleteData();
*/