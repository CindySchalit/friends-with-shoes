const router = require('express').Router()

const models = require('../../server/db/models/index')
const Shoe = models.Shoe

router.post('/', (req, res, next) => {
  Shoe.create(req.body)
  .then(newShoe => res.status(201).send(newShoe))
  .catch(next)
})

router.get('/', (req, res, next) => {
  Shoe.findAll()
  .then(shoes => res.send(shoes))
  .catch(next)
})

router.get('/find', (req, res, next) => {
  Shoe.findAll()
  .then(shoes => {
    console.log('back end: got matching shoe from db')
    res.send(shoes)
  })
  .catch(next)
})

module.exports = router
