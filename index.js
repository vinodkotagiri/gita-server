const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()
const verseRoute = require('./routes/verse')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
const PORT = process.env.PORT || 27000
app.use('/', verseRoute)
mongoose.connect(process.env.MONGO_URI, () => console.log('Connected to database'))
app.listen(PORT, () => console.log('listening on port ' + PORT))