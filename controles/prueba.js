;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "la prueba es OK21"
    })
}



module.exports = {
   prueba 
}