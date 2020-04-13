;
const express = require('express')
const multipart = require('connect-multiparty')
let api = express.Router()
  pruebaControl = require('../controles/prueba')
  usuariosControl = require('../controles/crudUsuarios')
  pdfControl = require('../controles/crudPdf')
  let multipartPdf = multipart()

  //api.post('/registro',usuariosControl.ingresarUsuario)
  //api.get('/prueba', pruebaControl.prueba)
  api.get('/leerUsuarios', usuariosControl.leerUsuarios)
  api.get('/leerDocentes', usuariosControl.leerDocentes)
  api.get('/leerCarreras', usuariosControl.leerCarreras)
  api.get('/leerInstitutos', usuariosControl.leerInstitutos)
  api.get('/leerRoles', usuariosControl.leerRoles)
  api.get('/leerCarrerasxUsuario', usuariosControl.leerCarrerasxUsuario)
  api.post('/login', usuariosControl.login)
  api.post('/findById', usuariosControl.findById)
  api.post('/updateById', usuariosControl.updateById)
  api.post('/subir-pdf', multipartPdf ,pdfControl.subirPdf)
  api.get('/ver-pdf/:id', pdfControl.verPdf)
  //api.get('/leerInstituto', usuariosControl.leerTabla)
  

module.exports = api