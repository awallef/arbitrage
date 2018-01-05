// Importing Node modules and initializing Express
const config = require('./main'),
  db = config.datasources.default,
  Sequelize = require('sequelize')

module.exports = new Sequelize(db.database, db.username, db.password, {
  dialect: db.dialect,
  host: db.host,
});
