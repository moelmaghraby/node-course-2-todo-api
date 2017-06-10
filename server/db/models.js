const mongoose = require('mongoose');


//The Tood Model
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
        default: null
    }
});
// the User Model
var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
})

module.exports.Todo = Todo;
module.exports.User = User;