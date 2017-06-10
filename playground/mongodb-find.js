const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to the server');
    }

    console.log('Connected to MongoDb');
    // db.collection('Todos').find({ _id: new ObjectID('593b266e42e0254bc9cee35d') }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // })

    db.collection('Users').find({ name: 'Maghraby' }).toArray().then((docs) => {
        console.log('users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    })
    //db.close();

})