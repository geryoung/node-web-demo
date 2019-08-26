var Datastore = require('nedb'),
    db = new Datastore({ filename: './db/user.db', autoload: true });


module.exports = db;
