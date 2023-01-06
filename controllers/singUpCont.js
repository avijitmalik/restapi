const User = require('../models/userModel')


const singUp = async(req, res) => {
    const {name,username,email} = req.body;

    try {
        const user = await User.create({
            name,
            username,
            email
        })   
        res.status(201).json({
            message:`Sing-up try server is connected..! ${name}
            and data is now ${user}`
        })
    } catch (error) {
        res.status(404).json({
            message:"Something went to worngs.!"
        })
        console.log("worng..!");
    }
}

module.exports = singUp