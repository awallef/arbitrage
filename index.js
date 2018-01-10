// Importing Node modules and initializing Express
const config = require('./config/main'),
express = require('express'),
{ Jim } = require('askjim-node'),
app = express(),
jim = new Jim()

jim.log('hey')
jim.register('Model','User',require('./src/models/user'))

jim.registerFork('gdax', './forks/gdax.js');




// express IO
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
