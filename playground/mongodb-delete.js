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
	
	//deleteMany
	/*db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
		
		console.log(result);
	});*/
	
	//deleteOne
	
/*	db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((results) =>{
	
	console.log(results);
	});
*/
	//findOneAndDelete
	
	/*db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	
	console.log(result);
	});*/
	
	/*db.collection('Users').deleteMany({name:'Sourabh'}).then((results)=>
															 {
	console.log(results);
	
	});*/
	
	db.collection('Users').findOneAndDelete({_id:new ObjectId("5b52c99c78a5380ec730d7a3")}).then((results)=>{
	console.log(results);
	});
	
	//client .close();

});