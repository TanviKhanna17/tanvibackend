const express = require('express') //express here is an object
require('dotenv').config()

const app = express() // app is an object

const port = 3005

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('tanvistwitter')
})

app.get('/login', (req,res) => {
    res.send(`<h1>hahahhahaha login karo`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
