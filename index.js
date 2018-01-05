// Importing Node modules and initializing Express
const config = require('./config/main'),
  express = require('express'),
  app = express(),
  sequelize = require('./config/sequelize')

// db tests
sequelize
  .query('SELECT * FROM positions LIMIT 10', { raw: true })
  .then(projects => { console.log(projects) })

// fork
const { fork } = require('child_process')
const forks = {}

// GDAX
//forks.gdax = fork('./forks/gdax.js')
//forks.gdax.on('message', (msg) => console.log('Message from gdax:', msg))

// Binance
//forks.binance = fork('./forks/binance.js')
//forks.binance.on('message', (msg) => console.log('Message from binance:', msg))





// express IO
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
