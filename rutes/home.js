//Rutes a la plana principal
//Crearem un arxiu index.html sota /public per servir-lo amb aquesta ruta
const express = require('express')
const home = express.Router()
var path = require('path')

/*
home.get('/', (req, res) => {
    res.send("Hola soc el root del directori home de l'aplicació")
})
*/

// Presenta la única home de l'aplicació
home.get('/', (req, res)  => {
    res.sendFile(path.resolve('public/index.html'))
})

module.exports = home