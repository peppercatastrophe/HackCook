const express = require('express')
const Controller = require('./controllers/controller')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))

app.get('/', Controller.showHomepage)

app.listen(port, () => {
  console.log(`currently listening on port ${port}`)
})