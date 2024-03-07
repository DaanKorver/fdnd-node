const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Express met Vercel. GRATIS!!!')
})

module.exports = app
