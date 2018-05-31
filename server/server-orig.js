var {mongoose} = require('./db/mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        completedAt: null
    }
});

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var newTodo = new Todo({
//     text: 'Bath',
//     // completedAt: 5
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

var newUser = new User({
    email: 'rawalmaharshi@gmail.com'
});

newUser.save().then((doc) => {
    console.log('Saved a new user', doc);
}, (e) => {
    console.log('Unable to save a new user', e);
});
