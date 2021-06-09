const { app: server } = require('../config/env.config')

exports.verifyStatusServer = function (app) {
  server.enviroment !== 'test' &&
    console.log(
      ` 
      .d8888b.                                  d8b 
      d88P  Y88b                                 Y8P 
      Y88b.                                          
       "Y888b.   888  888  888  8888b.  88888b.  888 
          "Y88b. 888  888  888     "88b 888 "88b 888 
            "888 888  888  888 .d888888 888  888 888 
      Y88b  d88P Y88b 888 d88P 888  888 888 d88P 888 
       "Y8888P"   "Y8888888P"  "Y888888 88888P"  888 
                                        888          
                                        888          
                                        888  

      Swapi Server v.1.0
      Server running at:
    `
    )

  switch (server.enviroment) {
    case 'development':
      console.log(
        ` 

        - Local: \x1b[36m%s\x1b[0m`,
        `http://localhost:${app.get('onPort')}`
      )
      break
    case 'production':
      console.log(
        `  

        - Production Mode on Port: \x1b[36m%s\x1b[0m`,
        `${app.get('onPort')}`
      )
      break
    case 'test':
      console.log('Servido de pruebas en: \x1b[36m%s\x1b[0m', app.get('onPort'))
  }
}

