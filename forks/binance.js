const binance = require('node-binance-api')
//binance.prices(ticker => process.send(ticker))
binance.bookTickers(ticker => process.send(ticker))
