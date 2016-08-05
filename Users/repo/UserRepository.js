'use strict'
class UserRepository {
  constructor (usrDao) {
    this.usrDao = usrDao
  }

  save (usrEntity) {
    if (usrEntity._id) return this.usrDao.update(usrEntity)
    return this.usrDao.save(usrEntity)
  }

  getAll () {
    return this.usrDao.getAll()
  }

  remove (id) {
    console.log(id)

    return this.usrDao.remove(id)
  }

}

module.exports = UserRepository
