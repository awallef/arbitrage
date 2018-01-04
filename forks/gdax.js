const Gdax = require('gdax')
const publicClient = new Gdax.PublicClient()

// go...
/*
publicClient.getProducts((error, response, data) => {
  if (error) return process.send(error)

  process.send(data)

});
*/
publicClient.getProducts().then(data => process.send(data)).catch(error => process.send(error));
