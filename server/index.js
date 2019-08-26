const express = require('express')
const userRoute = require('./routes/user');

function start() {
    const app = express()
    const port = 3000

    app.get('/', (req, res) => res.send('Hello World!'))
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