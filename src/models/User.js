const bcrypt = require('bcrypt-nodejs'),
Sequelize = require('sequelize'),
sequelize = require('../../config/sequelize')

let User = sequelize.define('user', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Ce n\'est pas une adresse e-mail.'
      },
    }
  },
  username: { type: Sequelize.STRING, allowNull: false},
  password: { type: Sequelize.STRING, allowNull: false},
  active: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: true },
},{
  hooks:{
    beforeCreate: (user, options) => {
      return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) return reject(err)
          bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return reject(err)
            return resolve(hash)
          })
        })
      })
      .then(success => user.password = success )
      .catch(err => console.log(err))
    }
  },
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'modified',
})

User.prototype.validPassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    if(bcrypt.compareSync(password, hash)) return resolve();
    return reject('Mot de pass invalide');
  })
}

module.exports = User
