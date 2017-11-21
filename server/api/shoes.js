const router = require('express').Router()

const models = require('../../server/db/models/index')
const Shoe = models.Shoe

router.get('/', (req, res, next) => {
  Shoe.findAll()
  .then(shoes => res.send(shoes))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Shoe.create(req.body)
  .then(newShoe => res.status(201).send(newShoe))
  .catch(next)
})

router.post('/find', (req, res, next) => {
  Shoe.findOne( { where: req.body })
  .then(shoe => res.send(shoe))
  .catch(next)
})

module.exports = router
