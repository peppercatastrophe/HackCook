const {Recipe} = require('../models')
const ErrorHelper = require("../helpers/errorHelper")

class ControllerRecipe {
  static async recipeListPage(req, res) {
    try {
      const recipes = await Recipe.findAll()
      res.render('list', { recipes })
    } catch (err) {
      console.log(err)
      res.send(err)
    }
  }

  static async recipePage(req, res) {
    try {
      const { id } = req.params
      const recipe = await Recipe.findByPk(id)
      res.render('main', { recipe })
    } catch (err) {
      console.log(err)
      res.send(err)
    }
  }

  static async recipeAddPage(req, res) {
    try {
      res.render('add', { recipe })
    } catch (err) {
      console.log(err)
      res.send(err)
    }
  }

  static async recipeAddHandler(req, res) {
    try {
      const newRecipe = req.body
      await Recipe.create(newRecipe)
      res.render('/recipe/list')
    } catch (err) {
      console.log(err)
      let arrayError = ErrorHelper.compileArray(err)

      if (errorMessages.length <= 0){
        res.send(error)
      } else {
        res.render('/register', { error: arrayError })
      }
    }
  }

  static async recipeHandlerInsert(req, res) {
    try {
      const { id } = req.params
      const recipe = req.body
      await Recipe.update(recipe, {
        where: { id }
      })
      res.render('/recipe/list')
    } catch (err) {
      console.log(err)
      let arrayError = ErrorHelper.compileArray(err)

      if (errorMessages.length <= 0){
        res.send(error)
      } else {
        res.render('/register', { error: arrayError })
      }
    }
  }
}

module.exports = ControllerRecipe