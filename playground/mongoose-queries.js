const{ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id='5b5e0a1660ac5b4ee8b89007';
var userId='5b5dc33cbea0ce441b1a5627'

/*if(!ObjectID.isValid(id))
{
	console.log('Id not valid');
}*/

/*Todo.find({

_id: id

}).then((todos)=>{
	
	console.log('Todos',todos);
});


Todo.findOne({
	_id: id

}).then((todo)=>{
	
	console.log('Todo',todo);
});

*/

User.findById(userId).then((user)=>{
	if(!user)
	{
		return console.log('User not found');
	}
	console.log(JSON.stringify(user,undefined,2));
},(e)=>{
	
	console.log(e);
});

/*Todo.findById(id).then((todoById)=>{
	if(!todoById)
	{
		return console.log("Id not found");
	}
	console.log('todoById',todoById);
}).catch((e)=>console.log(e));
*/