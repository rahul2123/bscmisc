const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const express = require('express')
const app = express()
app.use('/static', express.static(__dirname + '/dist'))
global.config = require('./config.json')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const routes = require('./routes')
app.use('/bot', routes)
const port = process.env.PORT || 4000
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})
app.listen(port, () => {
	console.log(`App is running on port ${port}`)
})