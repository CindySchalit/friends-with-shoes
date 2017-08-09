const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (req, res, next) => {
  res.status(200).send({ message: 'Hello World!' })
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

module.exports = app
