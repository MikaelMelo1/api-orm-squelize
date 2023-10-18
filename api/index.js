const express = require('express')
const routes = require('./routes')
const PessoaController = require('./controllers/PessoaController')
const pessoaRoute = require('./routes/pessoasRoute')


const app = express()
//port for iniciation of API
const PORT = 8080
routes(app, pessoaRoute)

//iniciation of API
app.listen(PORT, () => {
  console.log(`On in port ${PORT}`)
})


//export module for other app can use
module.exports = app