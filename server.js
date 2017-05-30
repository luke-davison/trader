const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

// Middleware
app.user(bodyParser.json())
app.use(express.static('public'))

// Routes
app.use('/', routes)

//  send back a creator function which links a db with the app so that it is testable
module.exports = function (db) {
  app.set('db', db)
  return app
}
