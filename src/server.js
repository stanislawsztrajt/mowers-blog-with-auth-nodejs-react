// config
const express = require('express')
const app = express()
const database = require('./config/database')
require('dotenv').config();
database.connect()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

// routes
const userRoutes = require('./api/user/config/routes')

app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'there is nothing, go to /users or /mowers' })
})

// routes
app.use('/users', userRoutes);

app.listen(8000, () => {
  console.log('server listening on 8000')
})