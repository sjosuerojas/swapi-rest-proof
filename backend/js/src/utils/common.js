exports.isEmptyObj = (obj = '') => {
    return Object.keys(obj).length
  }
  
  exports.isPropNull = (prop) => {
    if (!prop) {
      return null
    }
  
    return prop
  }
  