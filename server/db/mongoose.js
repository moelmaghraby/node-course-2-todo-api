const mongoose = require('mongoose');
const models = require('./models');

//Configuring Mongoose to use Promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };