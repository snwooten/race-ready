const router = require('express').Router()
const { Run } = require('../db/models')
module.exports = router


//Once a user creates a race, runs will be created in reference to that raceId
router.post('/races/:raceId', (req, res, next) => {
  Run.bulkCreate(req.body)
    .then(() => {
      return Run.findAll({
        where: {
          raceId: req.params.raceId
        }
      })
    })
    .then(runs => {
      res.status(201).json(runs)
    })
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  Run.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  .then(([_, updatedRun]) => {
    res.status(201).json(updatedRun[0])
  })
  .catch(next)
})
