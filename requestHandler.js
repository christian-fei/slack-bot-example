const formatResponse = (text) => ({text:text, response_type: 'in_channel'})
module.exports = (request) => {
  return formatResponse(`Hello, ${request.originalRequest.user_name}`)
}
