'use strict'
const expect = require('chai').expect
const UserMapper = require('../Users/service/UserMapper')
const UserDTO = require('../Users/dto/UserDTO')
const UserEntity = require('../Users/entity/UserEntity')

describe('userMapper', () => {
  let usrMapper

  // Fonction utilisée avant chaque test
  beforeEach(() => {
    usrMapper = new UserMapper()
  })

  describe('userMapper#toDto', () => {
    it('should return a UserDTO when passing a UserEntity', () => {
      expect(usrMapper.toDTO(new UserEntity('12132', 'Nom', 'Prenom'))).to.be.an.instanceOf(UserDTO)
    })

    // to.deep.equal permet de comparer des objets, tableau etc...
    it('should return a UserDTO whith good properties', () => {
      const expectedDto = new UserDTO('12132', 'Nom', 'Prenom')
      expect(usrMapper.toDTO(new UserEntity('12132', 'Nom', 'Prenom'))).to.deep.equal(expectedDto)
    })
  })

  describe('userMapper#toEntity', () => {
    it('should return a UserEntity when passing a UserDTO', () => {
      expect(usrMapper.toEntity(new UserDTO())).to.be.an.instanceOf(UserEntity)
    })
  })
})
