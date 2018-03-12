const router = require('express').Router()
const { Race } = require('../db/models')
module.exports = router


router.get('/:raceId', (req, res, next) => {
  Race.findById(req.params.raceId)
  .then(race => res.json(race))
  .catch(next)
})

router.post('/', (req, res, next) => {
   Race.create(req.body)
    .then(race => {
      res.status(204).json(race);
    })
  .catch(next)
})
