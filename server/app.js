const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use('/api', require('./api'))
app.use( (req, res, next) => {
  return path.extname(req.path).length > 0
  ? res.status(404).send('Not found')
  : next()
})

app.get('*', (req, res, next) => {
  res.status(200).send({ message: 'Hello from the back end!' })
})

app.use( (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

module.exports = app
