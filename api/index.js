const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index', {
		text: 'Vercel met EJS en Node. For free :)',
	})
})

module.exports = app
