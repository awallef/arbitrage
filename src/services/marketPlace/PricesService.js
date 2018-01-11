'use strict'

const {Service} = require('askjim-node'),
{ TradeService } = require('./TradeService'),
{ GdaxService } = require('./GdaxService')

class PricesService extends Service {

  static get NAME() { return 'PricesService' }

  listInstructionInterests()
  {
    return [
      TradeService.PRODUCTS_FETCHED,
      GdaxService.READY
    ]
  }

  handleInstruction(instruction)
  {
    switch(instruction.name)
    {
      case GdaxService.READY:
        this.jim.askFork('gdax',TradeService.GET_PRODUCTS)
        break
      case TradeService.PRODUCTS_FETCHED:
        console.log(instruction.body);
        break
    }
  }
}

module.exports = { PricesService }
