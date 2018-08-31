require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controller')
const massive = require('massive')

const app = express()
const PORT = 5600

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
    .then( db => {
        app.set('db', db)
        app.listen(PORT, ()=> console.log(`The magic is happening on port: ${PORT}`))
    })


