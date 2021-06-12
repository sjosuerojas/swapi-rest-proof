const { validationResult } = require('express-validator')
const { app } = require('../../../config/env.config')

/**
 * @argument req, res, next
 * @description isValidSchemaModel
 * @returns Validation response
 */
exports.isValidSchemaModel = (req, res = response, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      statusOk: false,
      error_validation: errors.mapped(),
    })
  }

  next()
}

/**
 * @argument req, res, next
 * @description validAPIKey
 * @returns <httStatus/Next> Response
 */
 exports.validAPIKey = (req, res, next) => {
    const authorization = req.headers['x-api']
    if (authorization) {
      try {
        const authReq = authorization.split(' ')
        if (authReq[0] !== 'Basic') {
          return res
            .status(401)
            .json({ statusOk: false, error_details: 'INVALID_APIKEY' })
        } else {
          if (authReq[1] !== app.apiKey) {
            return res
              .status(401)
              .json({ statusOk: false, error_details: 'INVALID_TOKEN' })
          }
          return next()
        }
      } catch (error) {
        return res
          .status(403)
          .json({ statusOk: false, error_details: 'FORBIDDEN_REQUEST' })
      }
    } else {
      return res
        .status(401)
        .json({ statusOk: false, error_details: 'INVALID_REQUEST' })
    }
  }
