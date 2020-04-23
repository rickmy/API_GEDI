;
let app = require('./app')
let port = process.env.port || 5000

app.listen(port, () => {
  console.log(`El servicio está funcionando en el puerto ${ port }`)
})


