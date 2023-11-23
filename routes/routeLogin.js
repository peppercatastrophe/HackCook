const express = require("express")
const router = express.Router()
const controllerLogin = require("../controllers/controllerLogin")

router.get("/", controllerLogin.loginPage)
router.get("/add", controllerLogin.loginHandler)

module.exports = router