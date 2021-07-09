//Enviament i recepció d'informació del client
var express = require('express')
var rutes = express.Router()


//Permet llegir els paràmetres que arriven per post
rutes.use(express.urlencoded({ extended: true }))


rutes.get('/enviar', function (req, res) {
    res.json({ username: 'Pepeto', 
                cognome: 'JianCarlo',
                msg: 'Envio dades amb json'
            })
})


module.exports = rutes