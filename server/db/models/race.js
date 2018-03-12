const Sequelize = require('sequelize');
const db = require('../db');
//const Run = require('./run');


const Race = db.define('race', {
  raceName: Sequelize.STRING,
  raceDate: {
    type: Sequelize.DATE,
  },
  trainingStartDate: {
    type: Sequelize.DATE,
    defaultValue: Date.now() + 126
  }
})


module.exports = Race;
