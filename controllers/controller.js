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
// static registerPage(req, res) {
//   let {error} = req.query 
//   if(error){
//       error = error.split(",")
//   }
//   res.render("/register", {error})
// }

static registerPage (req,res) {
  try {
    let {error} = req.query 
    if(error){
        error = error.split(",")
  }
    res.render("register", {error})
    
  } catch (error) {
    
  }
}

static async registerHandler(req, res) {
  const {name, password, email, role} = req.body
  try {
      const profile = await Profile.create({name})
      const user = await User.create({name, password, email, role, ProfileId: profile.dataValues.id})
      res.redirect("/login")
  } catch (err) {
      if(err.name === "SequelizeValidationError") {
          const error = err.errors.map(el => el.message)
          res.redirect(`/register?error=${error}`)
      }
      else {
          res.send(err)
      }
  }
}
}

module.exports = Controller