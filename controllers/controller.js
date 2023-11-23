const bcrypt = require ("bcrypt")

class Controller {
  static async showHomepage(req, res) {
    try {
      res.render('homepage')
    } catch (error) {
      console.log(error)
    }
  }
  static async loginPage(req, res) {
    let {error} = req.query 
    if(error){
        error = error.split(",")
    }
    res.render("login", {error})
}

static async loginHandler(req, res) {
    try {
        const {name, password} = req.body
        console.log(name, password);
        const user = await User.findOne({where :{name}})
        if(user?.dataValues){
            const passDb = user.dataValues.password
            const passCheck = bcryptjs.compareSync(password, passDb)
            if(passCheck) {
                req.session.user = user.dataValues
                return res.redirect("/")
            }
            else {
                const msg = "Password or Username is invalid"
                return res.redirect(`/login?error=${msg}`)
            }   
        }
        const msg = "Password or Username is invalid"
        res.redirect(`/login?error=${msg}`)
    } catch(err) {
        console.log(err);
        res.send(err)
    }
}
}

module.exports = Controller