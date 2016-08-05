'use strict'

class UserDAO {
  constructor (conn) {
    this.em = conn
  }

  getAll () {
    return new Promise((resolve, reject) => {
      this.em.find().toArray((err, result) => {
        if (err) return reject(err)
        return resolve(result)
      })
    })
  }

  getByID () {}

  getByCriteria () {}

  remove (id) {
    console.log('dao')
    return new Promise((resolve, reject) => {
      this.em.removeById(id, (err, result) => {
        if (err) console.log(result)
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
      this.em.insert(usrEntity, (err, result) => {
        if (err) return reject(err)
        return resolve(result)
      })
    })
  }

}

module.exports = UserDAO
