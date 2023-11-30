require("dotenv").config()

require("./db")

const express = require("express")

const app = express()

require("./config")(app)

const index = require('./routes/index')
app.use('/api', index)

require("./error-handling")(app)

module.exports = app
