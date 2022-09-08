require('dotenv').config()
const cors = require('cors')

const express = require('express')

const app = express()

// middlewre

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const airesponse = require('./routes/airesponse')

app.use('/airesponse', airesponse)

app.listen(8000, () => {
  console.log('app is listening')
})
