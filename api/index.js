const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

//first rota
app.get('/test', (req,res) => {
  res
  .status(200)
  .send({messagem: "test API"}) 
})

//port for iniciation of API
const PORT = 8080


//iniciation of API
app.listen(PORT, () => {
  console.log(`On in port ${PORT}`)
})


//export module for other app can use
module.exports = app