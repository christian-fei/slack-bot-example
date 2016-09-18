const chai = require('chai')
const expect = chai.expect

const requestHandler = require('./requestHandler')

describe('requestHandler', function () {
  const user_name = 'user_1'
  const requestFrom = (text) => ({originalRequest: {text:text, user_name: user_name}})

  describe('greeting', function () {
    it('greets user', function () {
      expect( requestHandler(requestFrom('hello')).text ).to.equal('Hello, user_1')
    })
  })
})
