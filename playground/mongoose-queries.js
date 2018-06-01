const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b1138a598f9bae53dc6a4b4';
//
// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


var user_id = '5b0fd6560c2663093599ff33';

User.findById(user_id).then((user) => {
    if(!user){
        return console.log('User not found.');
    }
    console.log('User: ', JSON.stringify(user,undefined, 2));
}).catch((e) => console.log(e));
