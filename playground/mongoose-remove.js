const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove, findOneAndRemove, findByIdAndRemove

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove({id: '5b1220a3647e5b300c79fdd0'}).then((todo) => {
//     console.log({todp});
// });

Todo.findByIdAndRemove('5b1220a3647e5b300c79fdd0').then((todo) => {
    console.log(todo);
})
