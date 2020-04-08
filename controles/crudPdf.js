;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])
let fs = require('fs')
let path = require('path')


let subirPdf =async (req, res) => {
    let files = req.files.upload
    let url = files.path
    console.log(url)
    urlPdf = url.split('\\')
    console.log('---------------')
    console.log(urlPdf[1])

    await db('documentos').insert({
        path: urlPdf[1]
    }).then(registros =>{
        return res.status(200).json({
            ok: true,
            mensaje: 'PDF guardado correctamente'
        })
    })
    .catch(error =>{
       
        return res.status(500).json({
            ok: false,
            error
        })
    })
    
}

let verPdf = (req,res) =>{
    let pdf = req.params.pdf
    let rutaPdf = `./subidas/${pdf}`
    
    fs.exists(rutaPdf, (exists) =>{
        if (exists) {
            res.status(200).sendFile(path.resolve(rutaPdf))
        } else {
            return res.status(404).send({mensaje:'pdf no encontrado'})
        }
    })
}

module.exports ={
subirPdf,
verPdf


}