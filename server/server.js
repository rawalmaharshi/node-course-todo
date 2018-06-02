var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);  //send the doc back to client
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos: todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    // res.send(req.params);
    var id = req.params.id;
    if (!ObjectID.isValid(id)){
        return res.status(404).send('Invalid ID');
    }

    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send('Todo not found for that id.');
        }

        // res.status(200).send(todo); don't send it like this, use {todo} instead
        res.status(200).send({todo});
    }).catch((e) => res.status(400).send(e));
});

app.listen(port, () => {
    console.log(`Started at port ${port}`);
});

module.exports = {app};
