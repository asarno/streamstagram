var express = require('express')
var app = express()
var path = require('path')
var images = require('./data.json')

app.use('/', express.static(path.join(__dirname, 'images')))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/images', function(req, res) {
  console.log(images)
  res.json(images)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
