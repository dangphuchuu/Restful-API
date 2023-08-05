require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

//! Router
const productRouter = require('./routes/productRouter')
const app = express()
app.use(express.json())


app.use('/api/products', productRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is runing on port', port)
})

// Connect MongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI)
