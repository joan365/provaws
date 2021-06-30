const express = require('express')
const app = express()
const morgan = require('morgan')

app.set('port', 3000)
app.set('host', 'localhost')
app.use(express.static('public'))

//middelwares
app.use(morgan('dev'))

//Activem el servidor
app.listen(app.get('port'), app.get('host'), () => 
  console.log('Servdor en marxa a ', app.get('host'), ':', app.get('port')))