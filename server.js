const path = require('path')
const helmet = require('helmet')
const compression = require('compression')
const express = require('express')
const app = express()

app.use(helmet())
app.use(compression())
app.use(express.static(__dirname + '/dist'))
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(80, function() {
    console.log('listening on port 80...')
})
