const Sequelize = require('sequelize')
const db = require('../db')

const Run = db.define('Run', {
  distance: {
    type: Sequelize.FLOAT,
    validate: {
      isEmpty: false
    }
  },
  date: {
    type: Sequelize.DATE,
    validate: {
      isEmpty: false
    }
  },
  Status: {
    type: Sequelize.ENUM('Completed', 'In Progress', 'Did Not Complete', 'Future Run'),
    validate: {
      isEmpty: false
    }
  }
})

module.exports = Run
