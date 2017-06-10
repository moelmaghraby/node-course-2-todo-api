const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to the server');
    }

    console.log('Connected to MongoDb');
    db.collection('Todos').find({ text: 'Eat Lunch' }).toArray().then((result) => {
        console.log(result);
    })
    db.collection('Todos').findOneAndUpdate({ text: 'Eat Lunch' }, {
        $set: {
            completed: true
        }
    }, { returnOriginal: false })
        .then((result) => {
            console.log(result);
        })

    //db.close();

})