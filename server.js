const express = require("express")
const { singRoute } = require("./routes/auth/singRoute")
const app = express()
const PORT = process.env.PORT || 8000
require('dotenv').config()
// const bodyParser = require("body-parser")
const connectDB = require("./config/connectDB")



app.use(express.json())
app.use(express.urlencoded({extended:false}))

//@DataBase connected...

connectDB();

//@server routes..

app.use('/api/singup/',singRoute)
app.listen(PORT,()=>{
    console.log(`Server is running on this port ${PORT}`)
   
})