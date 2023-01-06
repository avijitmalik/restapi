const mongoose = require("mongoose")


const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("MongoDB server is Successfully connected")
    } catch (error) {
        console.log('MongoDB server not connected..!')
    }
}
module.exports = connectDB