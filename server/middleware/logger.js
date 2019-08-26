
const logger = require('../logger');
function timeLogger(req, res, next) {
    // function timeLog (req, res, next) {
    logger.info('Time log: ' + Date.now())
    next()
    //   }
}

const addTimeLogger = app => {
    app.use(timeLogger);
}

module.exports = {
    addLogger: addTimeLogger
}