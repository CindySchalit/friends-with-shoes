const router = require('express').Router()

router.use('/shoes', require('./shoes'))
router.use('/todos', require('./todos'))

router.use( (req, res) => {
  res.status(404).send('Not found')
})

module.exports = router
