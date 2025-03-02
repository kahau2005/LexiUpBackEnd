const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cookieParse = require('cookie-parser')

const PORT = 8000

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected!")
}).catch((err) => console.log("Connection failed!"))

app.use(cors())
app.use(cookieParse())
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.listen(PORT, () => {
    console.log(`The app is running at https://localhost:${PORT}`)
})