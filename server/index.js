const express = require('express')
const userRoute = require('./routes/user');
const logMiddleware = require('./middleware/logger');
const app = express();
const logger = require('./logger');
const path = require('path');

function start() {
    //config test
    require('../config');
    const timeout = require('config').get('timeout');
    logger.debug(timeout);

    //设置
    app.use(express.static(path.join(__dirname, 'public')))

    const port = 3000
    app.get('/', (req, res) => res.render('index'))
    logMiddleware.addLogger(app);
    app.use('/user', userRoute);
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}


/*
async function start () {
    const app = new Koa()
    const { port } = config
  
    await useMiddlewares(app)
  
    const server = app.listen(port, () => {
      console.log(
        process.env.NODE_ENV === 'development'
          ? `Open ${chalk.green('http://localhost:' + port)}`
          : `App listening on port ${port}`
      )
    })
  }
  */

  start()

  module.exports = app;