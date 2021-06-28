const express = require('express')
const app = express()

app.set('port', 3000)
app.set('host', 'localhost')

app.listen(app.get('port'), app.get('host'), () => 
  console.log('Servdor en marxa a ', app.get('host'), ':', app.get('port')))