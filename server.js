const express = require('express')
const app = express()

const generateChart = require('./lib/chart-gen')

app.get('/', (req, res) => {
  console.log(req.query)
  res.send(generateChart({ scopes: req.query.s }))
})

app.listen(8080, () => {
  console.log('Server listening on 8080')
})
