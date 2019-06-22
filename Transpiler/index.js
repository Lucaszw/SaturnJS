// const webpack = require('webpack');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const request = require('xhr-request-promise')

app.use(express.static('public'))
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.post('/transpile', (req, res) => {
  console.log('received response!')
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
