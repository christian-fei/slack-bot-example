const botBuilder = require('claudia-bot-builder')
module.exports = botBuilder((request) => {
  return `Hello, ${request.originalRequest.user_name}`
})
