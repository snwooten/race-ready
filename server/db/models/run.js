const Sequelize = require('sequelize');
const db = require('../db');
//const Race = require('./race');

const Run = db.define('run', {
  distance: {
    type: Sequelize.FLOAT,
  },
  date: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM('Completed', 'In Progress', 'Did Not Complete', 'Future Run'),
  }
})

module.exports = Run
