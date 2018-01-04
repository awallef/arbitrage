const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();

// go...
publicClient.getProducts((error, response, data) => {
  if (error) {
    process.send(error);
  } else {
    process.send(data);
  }
});
