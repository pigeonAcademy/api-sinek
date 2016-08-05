'use strict'
// Objet persistant à l'image de la données à stocker en base
class UserEntity {
  constructor (matricule, nom, prenom, _id) {
    this.matricule = matricule
    this.nom = nom
    this.prenom = prenom
    this._id = _id
  }
}

module.exports = UserEntity
