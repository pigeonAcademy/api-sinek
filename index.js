'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Connector = require('./Connector')
const MongoConnector = require('./MongoConnector')
const conn = new Connector(new MongoConnector(require('mongoskin').db('mongodb://localhost:27017/local'))).db

app.use(bodyParser.urlencoded({ extended: false }))

require('./Users')(app, conn)

app.listen(28469)

// new UserController(new UserService(new UserRepository(new UserDao(require('mongo')))))
