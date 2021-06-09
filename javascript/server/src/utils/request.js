const https = require('https')

exports.request = function (url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (resp) => {
        let data = ''

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk
        })

        resp.on('end', () => {
          resolve(JSON.parse(data))
        })
      })
      .on('error', (err) => {
        reject('Error request: ' + err.message)
      })
  })
}
