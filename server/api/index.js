const router = require('express').Router()

router.use('/shoes', require('./shoes'))

router.use( (req, res) => {
  res.status(404).send('Not found')
})

module.exports = router
