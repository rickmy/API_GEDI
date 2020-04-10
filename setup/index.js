;
let app = require('./app')
let port = 3000

app.listen(port, () => {
  console.log(`El servicio está funcionando en el puerto ${ port }`)
})


