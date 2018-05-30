// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID(); console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        //with the return statement, the control will move out of the function, and we will not need to use else statement
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b0e85bebd4effd56e704ccb')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Rishi'
    }, {
            $set: {
                name: 'Mahir'
            },
            $inc: {
                age: 2
            }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});
