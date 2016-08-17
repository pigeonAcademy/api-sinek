'use strict'
const UserController = require('./controller/UserController')
const UserService = require('./service/UserService')
const UserRepository = require('./repo/UserRepository')
const UserDao = require('./dao/UserDao')
const UserMapper = require('./service/UserMapper')

module.exports = function (app, conn) {
  app.get('/user/form', (req, res) => {
    res.render('user.form.twig', {
    })
  })

  app.get('/users', (req, res) => {
    new UserController(new UserService(new UserRepository(new UserDao(conn)), new UserMapper())).listUserAction(req, res)
  })

  app.post('/user/form', (req, res) => {
    // controle les champs obligatoire et s'il sont corrects
    // ajouter mes instances
    new UserController(new UserService(new UserRepository(new UserDao(conn)), new UserMapper())).addUserAction(req, res)
  })

  app.get('/user/form/:id', (req, res) => {
    new UserController(new UserService(new UserRepository(new UserDao(conn)), new UserMapper())).populateUserAction(req, res)
  })

  app.post('/user/form/:id', (req, res) => {
    new UserController(new UserService(new UserRepository(new UserDao(conn)), new UserMapper())).updateUserAction(req, res)
  })

  app.post('/user/delete/:id', (req, res) => {
    // controle les champs obligatoire et s'il sont corrects
    // ajouter mes instances
    new UserController(new UserService(new UserRepository(new UserDao(conn)), new UserMapper())).deleteUserAction(req, res)
  })
}
