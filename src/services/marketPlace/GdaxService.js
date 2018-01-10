'use strict'

const {TradeService} = require('./TradeService'),
Gdax = require('gdax')

class GdaxService extends TradeService {

  static get NAME() { return 'GdaxService' }

  constructor(serviceName)
  {
    super(serviceName)
    this.publicClient = new Gdax.PublicClient()
  }

  handleInstruction(instruction)
  {
    switch(instruction.name)
    {
      case TradeService.GET_PRODUCTS:
        this.publicClient.getProducts()
        .then(data => this.askParent(TradeService.PRODUCTS_FETCHED, { data, fork: GdaxService.NAME }))
        .catch(error => console.log(error))
        break
    }
  }
}

module.exports = { GdaxService }
