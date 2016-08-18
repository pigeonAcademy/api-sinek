'use strict'
const UserDTO = require('../dto/UserDTO')
class UserController {
  constructor (usrService) {
    this.usrService = usrService
  }
  addUserAction (req, res) {
    // Vérifier si mes champs sont OK avec mon service
    this.usrService.save(new UserDTO(req.body.matricule, req.body.nom, req.body.prenom, req.body._id)).then(usrDTO => {
      res.render(this.listUserAction(req, res))
    })
  }

  listUserAction (req, res) {
    console.log('listUserAction')
    this.usrService.getAll().then(userDTOArray => {
      res.render('user.list.twig', {users: userDTOArray})
    })
  }

  deleteUserAction (req, res) {
    this.usrService.remove(req.params.id).then(() => {
      res.render(this.listUserAction(req, res))
    })
  }

  populateUserAction (req, res) {
    this.usrService.getById(req.params.id).then(user => {
      res.render('user.form.twig', {user: user})
    })
  }
}

module.exports = UserController
