const express = require('express')
const app = express()
const morgan = require('morgan')

app.set('port', 3000)
app.set('host', 'localhost')
//app.use(express.static('public')) //Per defecte serveix el index.html per la ruta /

//middelwares
app.use(morgan('dev'))

//rutes
const home = require('./rutes/home')
app.use('/',home)

//Activem el servidor
app.listen(app.get('port'), app.get('host'), () => 
  console.log('Servdor en marxa a ', app.get('host'), ':', app.get('port')))