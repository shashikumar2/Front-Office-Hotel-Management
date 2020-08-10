const express = require('express')
const app = express()
const port = 3050

// setup db
const configureStore = require ('./config/database')
configureStore()

// enable express to parse json data
app.use(express.json())

//setup routes
const routes = require('./config/routes')
app.use('/', routes)


app.listen(port, () => {
    console.log('listening on port', port)
})