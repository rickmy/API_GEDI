;
const express = require('express')
let api = express.Router(),
  //pruebaControl = require('../controles/prueba'),
  usuariosControl = require('../controles/crudUsuarios')

  api.post('/registrarUsuario',usuariosControl.ingresarUsuario)
  api.get('/leerUsuarios', usuariosControl.leerUsuarios)
  api.get('/leerRol', usuariosControl.leerRoles)
  api.get('/leerInstituto', usuariosControl.leerInstitutos)
  api.get('/leerCarrera', usuariosControl.leerCarreras)
  

module.exports = api