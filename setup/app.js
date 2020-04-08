;
const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  multipart = require('connect-multiparty')

let app = express(),
  rutas = require('../rutas/ruta')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(multipart({uploadDir:'./pdfDirectorio'}))
app.use(cors())

app.use('/server', rutas)

module.exports = app