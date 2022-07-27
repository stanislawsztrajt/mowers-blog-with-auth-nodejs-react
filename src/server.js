const express = require('express')
const app = express()
const database = require('./config/database')
database.connect()
const userRoutes = require('./api/user/config/routes')

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'there is nothing, go to /users or /mowers' })
})

// routes
app.use('/users', userRoutes);

app.listen(8000, () => {
  console.log('server listening on 8000')
})