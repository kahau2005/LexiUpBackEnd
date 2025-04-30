const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cookieParse = require('cookie-parser')
const authRoute = require("./routes/auth")
const rootRoute = require("./routes")

const PORT = 8000

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected!")
}).catch((err) => console.log("Connection failed!"))

app.use(cors({credentials: true, origin: '*'}))
app.use(cookieParse())
app.use(express.json())

//Route
app.use("/v1/auth", authRoute)
app.use("/", rootRoute)

app.listen(PORT, () => {
    console.log(`The app is running at https://localhost:${PORT}`)
})