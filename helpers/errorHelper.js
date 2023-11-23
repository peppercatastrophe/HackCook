const { Error } = require("sequelize")

class ErrorHelper {
  static dict = {
    email: 'E-mail'
  }

  /**
   * 
   * @param {Error} e - Sequelize Error Object
   * @param {Array} array - Array containing errors to be displayed
   */
  static compileArray(error, array) {
    let returnArray = []
    let errorColumns = []
    if (!array) {
      array = returnArray
    }

    error.errors.forEach( e => {
      if (errorColumns.find( el => el == e.path)){
        console.log('line 19')
      } else {
        console.log('masuk else')
        console.log(errorColumns.push(e.path))
        console.log(errorColumns)

        if (e.message == 'Invalid validator function: unique') {
          array.push(this.dict[e.path] + ' ini sudah terdaftar')
        } else {
          array.push(e.message)
        }
      }
    })

    return returnArray
  }
}

module.exports = ErrorHelper