const {user} = require('../database/schema');

var userService = {};
userService.add = function (userObj) {
    return new Promise((resolve, reject) => {
        user.insert(userObj, function (err, docs) {
            if (err) {
                reject('err:' + err);
            } else {
                resolve(docs);
            }
        });    
    });
}

userService.get = function (userObj) {
    return new Promise((resolve, reject) => {
        user.find(userObj, function (err, docs) {
            if (err) {
                reject('err:' + err);
            } else {
                resolve(docs);
            }
        });    
    });
}

module.exports = userService;