'use strict'

const db = require('./server/db');
const User = db.models.user
const Race = db.models.race
const Run = db.models.run
const moment = require('moment');

const users = [{
  name: 'Silly Town Runner',
  photo: 'images/runnerPhoto.jpg',
  email: 'silly@town.com',
}, {
  name: 'Running Gal',
  photo: 'images/runnerPhoto.jpg',
  email: 'running@town.com',
}, {
  name: 'Running Guy',
  photo: 'images/runnerPhoto.jpg',
  email: 'guy@town.com',
}, {
  name: 'Sirious Town Runner',
  photo: 'images/runnerPhoto.jpg',
  email: 'sirious@town.com',
}]

const races = [{
  raceName: 'NYC Marathon',
  raceDate: Date.now() + 70,
  userId: 1
}, {
  raceName: 'Silly Town Marathon',
  raceDate: Date.now() + 126,
  userId: 2
}, {
  raceName: 'Greatville Marathon',
  raceDate: Date.now() + 30,
  userId: 3
}, {
  raceName: 'Spaghetti Marathon',
  raceDate: Date.now() + 25,
  userId: 4
}, {
  raceName: 'Spaghetti Marathon',
  raceDate: Date.now() + 126,
  userId: 4
}]

const runs = [{
  distance: 3,
  date: moment().format('MMM Do YY'),
  status: 'Completed',
  userId: 1,
  raceId: 1
}, {
  distance: 5,
  date: moment().add(3, 'days').format('MMM Do YY'),
  status: 'Future Run',
  userId: 2,
  raceId: 2
}, {
  distance: 6,
  date: moment().add(3, 'days').format('MMM Do YY'),
  status: 'Future Run',
  userId: 3,
  raceId: 3
}, {
  distance: 12,
  date: moment().add(3, 'days').format('MMM Do YY'),
  status: 'Future Run',
  userId: 4,
  raceId: 4
}, {
  distance: 5,
  date: moment().add(3, 'days').format('MMM Do YY'),
  status: 'Future Run',
  userId: 4,
  raceId: 5
}, {
  distance: 4,
  date: moment().subtract(3, 'days').format('MMM Do YY'),
  status: 'Completed',
  userId: 1,
  raceId: 1
}, {
  distance: 3,
  date: moment().subtract(10, 'days').format('MMM Do YY'),
  status: 'Did Not Complete',
  userId: 1,
  raceId: 1
}]

const seed = () =>
  Promise.all(users.map(user => User.create(user)))
  .then(() =>
    Promise.all(races.map(race => Race.create(race)))
    )
  .then(() =>
    Promise.all(runs.map(run => Run.create(run))))

const main = () => {
  console.log('Syncing the db');
  db.sync({ force: true })
  .then(() => {
    console.log('Seeding the db');
    return seed();
  })
  .catch(err => {
    console.log('Error while seeding');
    console.log(err);
  })
  .then(() => {
    db.close();
    return null;
  });
};
main();


console.log(Date.now(), Date.now()-1)

