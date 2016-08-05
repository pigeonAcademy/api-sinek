'use strict'
class UserDTO {
  constructor (matricule, nom, prenom, _id) {
    this.matricule = matricule
    this.nom = nom
    this.prenom = prenom
    this._id = _id
  }
}

module.exports = UserDTO
