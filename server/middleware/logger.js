
function logger(req, res, next) {
    // function timeLog (req, res, next) {
    console.log('Time log: ', Date.now())
    next()
    //   }
}

const addLogger = app => {
    app.use(logger);
}

module.exports = {
    addLogger: addLogger
}