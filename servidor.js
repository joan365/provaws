const express = require('express')
const app = express()
const morgan = require('morgan')

app.set('port', 3000)
app.set('host', 'localhost')
app.use(express.static('public')) 

//middelwares
app.use(morgan('dev'))

//rutes
const home = require('./rutes/home')
app.use('/',home)
const transaccions = require('./rutes/transaccions')
app.use('/',transaccions)
const editors = require('./rutes/editors')
app.use('/',editors)


//Activem el servidor
//Inicar des de linia de comanaments amb: npm run test
app.listen(app.get('port'), app.get('host'), () => 
  console.log('Servdor en marxa a ', app.get('host'), ':', app.get('port')))