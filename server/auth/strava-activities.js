const strava = require('strava-v3');
const router = require('express').Router()
module.exports = router


router.get('/:stravaId', (req, res, next) => {
  strava.athlete.listActivities(req.params.stravaId, (err, payload, limits) => {
    if (!err) {
      res.json(payload)
    } else {
      console.error(err);
    }
  })
})


//how do I get the user ID here?
//how do I get the data to appear on the front end?
