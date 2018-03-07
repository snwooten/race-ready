const Sequelize = require('sequelize')
const db = require('../db')

const Race = db.define('race', {
  date: {
    type: Sequelize.Date,
    validate: {
      isEmpty: false
    }
  },
  name: Sequelize.STRING,
})

module.exports = Race;
