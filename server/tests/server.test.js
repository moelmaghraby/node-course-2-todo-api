var supertest = require('supertest');
var expect = require('expect');
var server = require('../server');
var models = require('../db/models');

beforeEach((done) => {
    models.Todo.remove({}).then(() => done());
})

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'testing todos'

        supertest(server)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toEqual(text);
            }).end((err, res) => {
                if (err)
                    return done(err)

                models.Todo.find().then((todos) => {
                    expect(todos.length).toEqual(1);
                    expect(todos[0].text).toEqual(text);
                    done();
                }).catch((e) => done(e));
            })
    })
})