const path = require('path')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))

app.get('/', (req, res) => {
	res.render('index', {
		text: 'Vercel met EJS en Node. For free :)',
	})
})

module.exports = app
