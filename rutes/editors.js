//Enviament i recepció d'informació del client
var express = require('express')
var rutes_editors = express.Router()
var path = require('path')


//Permet llegir els paràmetres que arriven per post
//rutes_editors.use(express.urlencoded({ extended: true }))

//Editor REDACTOR
rutes_editors.get('/redactor', (req, res)  => {
    res.sendFile(path.resolve('public/redactor/index.html'))
})

rutes_editors.get('/contentools', (req, res)  => {
    res.sendFile(path.resolve('public/contentools/index.html'))
})


module.exports = rutes_editors