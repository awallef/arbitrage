//const Gdax = require('gdax'),
//publicClient = new Gdax.PublicClient()
//publicClient.getProducts().then(data => process.send(data)).catch(error => process.send(error));


// Importing Node modules and initializing Express
const { Jim } = require('askjim-node'),
{ GdaxService } = require('../src/services/marketPlace/GdaxService.js')
jim = new Jim(process)

jim.askParent('hello');
jim.registerService( new GdaxService() )
