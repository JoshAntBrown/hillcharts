const generateChart = require('../lib/chart-gen')

export default (req, res) => {
  console.log(req, req.query)

  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(generateChart({ scopes: req.query.s.split(',') }))
}
