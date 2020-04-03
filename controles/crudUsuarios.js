;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])
let bcrypt=require('bcrypt')

let ingresarUsuario = (req, res) => {
    let campos = req.body
    let tabla = 'usuarios'
    console.log('CAMPOS_:', campos)
    console.log('TABLA_:', tabla)
    db(tabla).insert({
        codigoUser: req.body.codigoUser,
        primerNombre: req.body.primerNombre,
        segundoNombre: req.body.segundoNombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        correo: req.body.correo,
        clave: req.body.clave,
        fechaRegistro: req.body.fechaRegistro
    })
        .then(resultado => {
            return res.status(200)
                .json({ mensaje: 'usuario registrado' })

        })
        .catch((error) => {
            return res.status(404).json({

                mensaje: error
            })
        })
}
    
let leerUsuarios = (req, res) => {

    db.select('*').from('usuarios')
        .then(registros => {
            return res.status(200).json(
                registros
            )
        })
        .catch(error => {
            return res.status(404).json({
                datos: error
            })
        })
}
let leerRoles = (req, res) => {

    db.select('*').from('roles')
        .then(registros => {
            return res.status(200).json(
                registros
            )
        })
        .catch(error => {
            return res.status(404).json({
                datos: error
            })
        })
}
let leerInstitutos = (req, res) => {

    db.select('*').from('institutos')
        .then(registros => {
            return res.status(200).json(
                registros
            )
        })
        .catch(error => {
            return res.status(404).json({
                datos: error
            })
        })
}
let leerCarreras = (req, res) => {

    db.select('*').from('carreras')
        .then(registros => {
            return res.status(200).json(
                registros
            )
        })
        .catch(error => {
            return res.status(404).json({
                datos: error
            })
        })
}


let leerTabla = (req, res) => {
    let campos = req.body.campos
    let tabla = req.body.tabla
    console.log(campos)
    console.log(tabla)
    db.select(campos).from(tabla)
    .then(registros =>{
        return res.status(200).json({
            datos: registros
        })
    })
    .catch(error => {
        return res.status(404).json({
            datos: error        })
    })
}

let leerTablaId = (req, res) => {
    let campos = req.body.campos
    let tabla = req.body.tabla
    let condicion = req.body.condicion
    db(tabla).where(condicion).select(campos)
    .then(registros => {
        return res.status(200).json({
            datos: registros
        })
    })
    .catch(error => {
        return res.status(404).json({
            datos: error
        })
    })
}

let ingresarRegistro = (req,res) => {
    let campos = req.body.campos
    let tabla = req.body.tabla
    console.log(campos.primerNombre)
    console.log(tabla)
    db(tabla).insert(campos)
    .then(registro => {
        return res.status(200).json({
            mensaje: "el registro due guardado"
        })
    })
    .catch(error => {
        return res.status(404).json({
            mensaje: error
        })
    })
}


let modificarRegistro = (req, res) => {
    let campos = req.body.campos
    let tabla = req.body.tabla
    let condicion = req.body.condicion
    db(tabla).where(condicion[0], condicion[1], condicion[2]).update(campos)
    .then(registro => {
        return res.status(200).json({
            mensaje: "El registro fue modificado"
        })
        
    })
    .catch(error => {
        return res.status(404).json({
            mensaje: error
        })
    })
}







module.exports = {
   ingresarUsuario,
   leerUsuarios,
   leerCarreras,
   leerRoles,
   leerInstitutos
}