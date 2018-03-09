const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  name: Sequelize.STRING,
  photo: {
    type: Sequelize.STRING,
    defaultValue: '/images/default-photo.jpg'
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = User

