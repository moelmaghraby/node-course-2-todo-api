var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var models = require('./db/models');

var app = express();
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
    var todo = new models.Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).
            send(e);
    })
})

app.get('/todos', (req, res) => {
    models.Todo.find().then((docs) => {
        res.send({ todos: docs })
    }, (e) => {
        console.log('Error when fetching data');
        res.status(400).send('ERROR!!');
    })
})

app.listen(3000, () => {
    console.log('started on port 3000');
});

module.exports = app;

