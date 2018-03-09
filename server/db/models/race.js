const Sequelize = require('sequelize');
const db = require('../db');
//const Run = require('./run');


const Race = db.define('race', {
  raceName: Sequelize.STRING,
  raceDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  trainingStartDate: {
    type: Sequelize.DATE,
    set() {
      this.setDataValue(this.raceDate - 126)
    }
  }
})


module.exports = Race;
