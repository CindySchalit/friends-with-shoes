const router = require('express').Router()

const models = require( '../../server/db/models/index')
const Todo = models.Todo

router.post('/', (req, res, next) => {
  Todo.create(req.body)
  .then(newTodo => res.status(201).send(newTodo))
  .catch(next)
})

router.get('/', (req, res, next) => {
  Todo.findAll()
  .then(todos => res.send(todos))
  .catch(next)
})

module.exports = router
