const express = require("express")
const ControllerRecipe = require("../controllers/controllerRecipe")
const router = express.Router()


router.get("/", ControllerRecipe.recipeListPage)

router.get("/:id", ControllerRecipe.recipePage)

// TODO: sambungkan halaman form add recipe
router.get("/add", ControllerRecipe.recipeAddPage)
router.post("/add", ControllerRecipe.recipeAddHandler)

const routerRecipe = router
module.exports = routerRecipe