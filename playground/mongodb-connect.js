const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to the server');
    }

    console.log('Connected to MongoDb');
    db.collection('Todos').insertOne({
        text: 'Eat Lunch',
        completed: false
    }, (error, result) => {
        if (error)
            return Console.log('unable to insert', error)

        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    // db.collection('Users').insertOne({
    //     name: 'Maghraby',
    //     age: 24,
    //     location: 'Egypt'
    // }, (error, result) => {
    //     if (error)
    //         return console.log('Unable to insert into users', error);

    //     console.log(result.ops[0]._id.getTimestamp());
    // })
    db.close();

})