const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/dist'))
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(8080, function() {
    console.log('listening on port 8080...')
})
