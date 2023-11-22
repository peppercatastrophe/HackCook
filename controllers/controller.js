class Controller {
  static async showHomepage(req, res) {
    try {
      res.render('homepage')
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = Controller