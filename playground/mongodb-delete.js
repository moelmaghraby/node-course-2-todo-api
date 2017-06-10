const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to the server');
    }

    console.log('Connected to MongoDb');
    //deleteMany()
    // db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // })


    //deleteOne()

    // db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete()
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    })

    //db.close();

})