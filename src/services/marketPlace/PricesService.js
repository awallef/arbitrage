'use strict'

const {Service} = require('askjim-node'),
{ TradeService } = require('./TradeService')

class PricesService extends Service {

  static get NAME() { return 'PricesService' }

  listInstructionInterests()
  {
    return [
      TradeService.PRODUCTS_FETCHED
    ]
  }

  handleInstruction(instruction)
  {
    switch(instruction.name)
    {
      case TradeService.PRODUCTS_FETCHED:
        this.publicClient.getProducts()
        console.log(instruction.body);
        break
    }
  }
}

module.exports = { PricesService }
