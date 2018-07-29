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
	/*db.collection('Todos').findOneAndUpdate({
		_id:new ObjectId('5b5d809244badacbd7fd81e0')},
											{
	$set:{
		completed:true
	}
	},{
		returnOriginal: false
	}).then((results)=>{
		console.log(results);
	});*/
	
	db.collection('Users').findOneAndUpdate({
	_id:new ObjectId('5b52aad29f45ad0c8dc3cbf6')
	},{
	$set:{
		name:'Sourabh'
	},
		$inc:{
			age:1
		}
	},
	{
		returnOriginal: false
	}).then((results)=>
			{
		console.log(results);
	});
	//client .close();

});