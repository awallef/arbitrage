'use strict'

const {Service} = require('askjim-node')

class TradeService extends Service {

  static get NAME() { return 'TradeService' }
  static get GET_PRODUCTS() { return 'TradeService.GET_PRODUCTS' }
  static get PRODUCTS_FETCHED() { return 'TradeService.PRODUCTS_FETCHED' }

  listInstructionInterests()
  {
    return []
  }
}

module.exports = { TradeService }
