const mongoose = require("mongoose")

const UserSchema =  mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'Please fill this text']  
    },
    username:{
        type:String,
        trim:true,
        required:[true,'Please fill this text']
    },
    email:{
        type:String,
        trim:true,
        required:[true,'Please fill this text'],
        unique:true,
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Users",UserSchema)
