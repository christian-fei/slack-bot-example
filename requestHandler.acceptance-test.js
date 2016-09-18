const chai = require('chai')
const expect = chai.expect

const requestHandler = require('./requestHandler')

describe('requestHandler', function () {
  it('greets user', function () {
    expect( requestHandler({originalRequest:{user_name:'user_1'}}) ).to.equal('Hello, user_1')
  })
})
