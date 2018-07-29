//const MongoClient = require('mongodb').MongoClient;


const {MongoClient,ObjectId} = require('mongodb');


/*var obj = new ObjectId();
console.log(obj);*/

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{

if(err)
{
	return console.log("Unable to connect to MongoDb Server");
	
}
	console.log("Connected to MongoDb Server");
	const db = client.db('ToDoApp');
	
	/*db.collection('Todos').find({
		_id:new ObjectId('5b52ccf692318d102ce44e5a')}).toArray().then((docs)=>{
	
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
	
		console.log("Unable to fetch todos",err);
		
	});*/
	
	/*db.collection('Todos').find().count().then((count)=>{
	
		console.log(`Todos Count: ${count}`);
		//console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
	
		console.log("Unable to fetch todos",err);
		
	});*/
	
	db.collection('Users').find({name:'Sourabh'}).toArray().then((docs)=>{
	
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
	
		console.log("Unable to fetch todos",err);
		
	});
	
	

	
	//client .close();

});