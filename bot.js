const botBuilder = require('claudia-bot-builder')
const requestHandler = require('./requestHandler')

module.exports = botBuilder(requestHandler)
