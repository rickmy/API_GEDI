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
/* app.use(cors()) */

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'XMLHttpRequest','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Allow', 'GET, POST, PUT, DELETE')
  next()
})

app.use('/server', rutas)

let port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`El servicio está funcionando en el puerto ${ port }`)
})