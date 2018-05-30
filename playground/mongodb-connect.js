// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID(); console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        //with the return statement, the control will move out of the function, and we will not need to use else statement
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Maharshi',
    //     age: 22,
    //     location: 'New Delhi'
    // }, (err, res) => {
    //     if(err){
    //         return console.log('Unable to insert user data', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').findOne({name: 'Maharshi'}, (error, result) => {
    //     if(error){
    //         return console.log('No records found for that id.', error);
    //     }
    //     else{
    //         console.log(result._id.getTimestamp());
    //     }
    // });

    db.close();
});
