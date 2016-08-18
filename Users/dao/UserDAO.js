'use strict'

class UserDAO {
  constructor (conn) {
    this.db = conn
    this.em = this.db.collection('Users')
  }

  getAll () {
    return new Promise((resolve, reject) => {
      console.log(this.em)
      this.em.find().toArray((err, result) => {
        if (err) return reject(err)
        return resolve(result)
      })
    })
  }

  getById (id) {
    return new Promise((resolve, reject) => {
      this.em.findById(id, (err, result) => {
        if (err) return reject(err)
        return resolve(result)
      })
    })
  }

  getByCriteria () {}

  remove (id) {
    return new Promise((resolve, reject) => {
      this.em.removeById(id, (err, result) => {
        return resolve(result)
      })
    })
  }

  save (usrEntity) {
    return new Promise((resolve, reject) => {
      this.em.insert(usrEntity, (err, result) => {
        if (err) return reject(err)
        usrEntity._id = result._id
        return resolve(usrEntity)
      })
    })
  }

  update (usrEntity) {
    return new Promise((resolve, reject) => {
      console.log('dao')
      console.log(usrEntity)
      this.em.update({_id: require('mongoskin').helper.toObjectID(usrEntity._id)}, {$set: {matricule: usrEntity.matricule, nom: usrEntity.nom, prenom: usrEntity.prenom}}, (err, result) => {
        if (err) {
          console.log(err)
          return reject(err)
        }else {
          console.log('oura !')
          return resolve(result)
        }
      })
    })
  }

}

module.exports = UserDAO
