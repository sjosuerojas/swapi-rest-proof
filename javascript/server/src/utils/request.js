const request = require('request')

exports.requestClient = function (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const options = {
      method,
      url,
    }

    request(options, function (error, response) {
      if (error) reject('Request error: ' + error)
      if (response) {
        const res = response.body
        resolve(JSON.parse(res))
      }
    })
  })
}
