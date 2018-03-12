const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  name: Sequelize.STRING,
  photo: {
    type: Sequelize.STRING,
    defaultValue: 'runnerPhoto.jpg'
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  stravaId: {
    type: Sequelize.INTEGER
  }
})

module.exports = User

