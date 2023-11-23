const { Error } = require("sequelize")

class ErrorHelper {

  /**
   * 
   * @param {Error} e - Sequelize Error Object
   * @param {Array} array - Array containing errors to be displayed
   */
  static compileArray(error, array) {
    let returnArray = []
    if (!array) {
      array = returnArray
    }

    error.errors.forEach( e => {
      if (e.message == 'Invalid validator function: unique') {
        array.push(e.path + ' ini sudah terdaftar')
      } else {
        array.push(e.message)
      }
    })

    return returnArray
  }
}

module.exports = ErrorHelper