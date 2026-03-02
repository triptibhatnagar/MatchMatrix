require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const errHandler = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json())
app.use(cors())
app.use(errHandler)

const PORT = process.env.PORT || 5000

const startServer = async() => {
    try{
        await connectDB()
        app.listen(PORT, () => {
            console.log(`SERVER CONNECTED SUCCESSFULLYY ON PORT NO: ${PORT}...`)
        })
    }catch(err) {
        console.error("SERVER ERROR: ",err)
        process.exit(1)
    }
}

startServer()