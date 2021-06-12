const { validationResult } = require('express-validator')

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
