const request = require('supertest');
// const express = require('express');

// const app = express();
const app = require('../server');


describe('GET /user', function () {
    it('responds with json', function (done) {
        // app.get('/user', function (req, res) {
        //     res.status(200).json({ name: 'john' });
        // });
        
        request(app)
            .get('/user')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });
});

