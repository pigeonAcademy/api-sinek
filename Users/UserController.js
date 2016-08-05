'use strict'
const UserDTO = require('./UserDTO')
class UserController {
  constructor (usrService) {
    this.usrService = usrService
  }
  addUserAction (req, res) {
    // Vérifier si mes champs sont OK avec mon service
    this.usrService.save(new UserDTO(req.body.matricule, req.body.nom, req.body.prenom)).then(usrDTO => {
      res.render(this.listUserAction(req, res))
    })
  }

  listUserAction (req, res) {
    this.usrService.getAll().then(userDTOArray => {
      res.render('user.list.twig', {users: userDTOArray})
    })
  }

  deleteUserAction (req, res) {
    this.usrService.remove(req.params.id).then(() => {
      res.render(this.listUserAction(req, res))
    })
  }
}

module.exports = UserController
