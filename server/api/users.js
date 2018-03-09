const router = require('express').Router()
const { User, Race, Run } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    attributes: ['id', 'name', 'email', 'photo']
  })
    .then(users => res.json(users))
    .catch(next)
})


router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId, {
    include: [{model: Race}, {model: Run}]
  })
  .then(user => res.json(user))
  .catch(next)
})
