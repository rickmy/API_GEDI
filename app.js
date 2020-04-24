;
const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  multipart = require('connect-multiparty')

let app = express(),
  rutas = require('./rutas/ruta')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(multipart({uploadDir:'./pdfDirectorio'}))
app.use(cors())

app.use('/server', rutas)

let port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`El servicio está funcionando en el puerto ${ port }`)
})