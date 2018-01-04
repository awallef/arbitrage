// fork
const { fork } = require('child_process');
const forks = {};

// GDAX
forks.gdax = fork('./forks/gdax.js');
forks.gdax.on('message', (msg) => console.log('Message from gdax:', msg))


// Binance
forks.binance = fork('./forks/binance.js');
forks.binance.on('message', (msg) => console.log('Message from binance:', msg))

// express IO
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
