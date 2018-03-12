const Sequelize = require('sequelize')
const db = require('../db')

const Strava = db.define('strava', {
  distance: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE
  },
  stravaSystemUserId: {
    type: Sequelize.INTEGER
  },
  stravaActivityId: {
    type: Sequelize.INTEGER
  }
})

module.exports = Strava
