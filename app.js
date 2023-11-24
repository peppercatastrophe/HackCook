const express = require('express')
const Controller = require('./controllers/controller')
const app = express()
const port = 3000
const routerLogin = require ("./routes/routeLogin")

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))

app.get("/", Controller.showHomepage)
app.get("/login", Controller.loginPage)
app.post("/add", Controller.loginHandler)
app.get("/register", Controller.registerPage)
app.post("/register", Controller.registerHandler)
// app.get ("/recipe", Controller.recipe)
app.get ("/recipe/list", Controller.recipeList)
app.get ("/recipe/list/add", Controller.renderRecipe)
app.post("/recipe/list/add", Controller.handlerRecipe)


// app.use("/", routerLogin)


app.get('/recipe', function(req, res) {
  const data = {
      title: "Cara Memasak Rendang",
      imgUrl: "https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat.jpg",
      idYoutube: "GNfRXKsvG04",
      bahan: "Bahan: 600 gr daging sapi sengkel, potong, 5 siung bawang putih, 7 siung bawang merah, 5 butir kemiri, 8 cabai keriting merah, 2 cabai merah, 3 cm jahe, 80 ml minyak kelapa, 2 batang serai, potong dan geprek, 1 lengkuas, iris dan geprek, 5 lembar daun jeruk purut, 2 lembar daun kunyit, 1 lembar daun pandan, 3 lembar daun salam, 500 ml air, 500 ml santan kental, Rempah kering: 1 sdm ketumbar bubuk, 2 sdt lada putih bubuk, 2 sdt jinten bubuk, ¼ sdt kayu manis bubuk, 1 sdt pala bubuk, 1 sdt bunga lawang bubuk, 1 sdt kapulaga bubuk, 1 sdt cengkeh bubuk, 1 sdt cabai bubuk, Lainnya: ½ sdm garam, 2 sdt gula, 1 sdt kaldu jamur"
  };
  res.render('main', data);
});




app.listen(port, () => {
  console.log(`currently listening on port ${port}`)
})