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
    return this.usrDao.remove(id)
  }

  getById (id) {
    return this.usrDao.getById(id)
  }

}

module.exports = UserRepository
