const assert = require('assert');
const {user} = require('../../../database/schema/index');

describe('user db', function () {
    var insertTime = Date.now();
    before(function (done) {
        user.insert({insertTime:insertTime}, function() {
            done();
        })
    });

    it('insert', function(done) {
        user.find({insertTime:insertTime}, function (err, docs) {
            assert.equal(docs.length, 1);
            done();
        })
    });

    after(function(done) {
        user.remove({insertTime:insertTime}, function () {
            done();
        })
    });
})
