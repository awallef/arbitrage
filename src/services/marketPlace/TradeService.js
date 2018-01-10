'use strict'

const {Service} = require('askjim-node')

class TradeService extends Service {

  static get NAME() { return 'TradeService' }

  static get GET_PRODUCTS() { return 'TradeService.GET_PRODUCTS' }

  listInstructionInterests()
  {
    return []
  }
}

module.exports = { TradeService }
