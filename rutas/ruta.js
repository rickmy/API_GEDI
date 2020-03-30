;
const express = require('express')
let api = express.Router(),
  pruebaControl = require('../controles/prueba'),
  usuariosControl = require('../controles/crudUsuarios')

  api.post('/registro',usuariosControl.ingresarUsuario)

module.exports = api