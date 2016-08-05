'use strict'
class UserService {
  constructor (usrRepo, usrMapper) {
    this.usrRepo = usrRepo
    this.usrMapper = usrMapper
  }

  save (usrDTO) {
    return this.usrRepo.save(this.usrMapper.toEntity(usrDTO)).then(usrEntity => {
      return this.usrMapper.toDTO(usrEntity)
    })
  }

  getAll () {
    return this.usrRepo.getAll().then(usrEntities => {

      const userDTOArray = []
      for (const item of usrEntities) {
        userDTOArray.push(this.usrMapper.toDTO(item))
      }
      return userDTOArray
    })
  }

  remove (id) {
    return this.usrRepo.remove(id)
  }
}

module.exports = UserService
