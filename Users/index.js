'use strict'
const UserDAO = require('./UserDAO')
const UserController = require('./UserController')
const UserService = require('./UserService')
const UserRepository = require('./UserRepository')
const UserDao = require('./UserDao')
const UserMapper = require('./UserMapper')

module.exports = function (app, conn) {
  app.get('/user/form', (req, res) => {
    res.render('user.form.twig', {
    })
  })

  app.get('/users', (req, res) => {
    new UserController(new UserService(new UserRepository(new UserDao(conn.collection('Users'))), new UserMapper())).listUserAction(req, res)
  })

  app.post('/user/form', (req, res) => {
    // controle les champs obligatoire et s'il sont corrects
    // ajouter mes instances
    new UserController(new UserService(new UserRepository(new UserDao(conn.collection('Users'))), new UserMapper())).addUserAction(req, res)
  })

  app.post('/user/delete/:id', (req, res) => {
    // controle les champs obligatoire et s'il sont corrects
    // ajouter mes instances
    new UserController(new UserService(new UserRepository(new UserDao(conn.collection('Users'))), new UserMapper())).deleteUserAction(req, res)
  })
}
