const express = require("express")
const singUp = require('../../controllers/singUpCont')
const singRoute = express.Router()

// const singRoute = require('express').Router()


singRoute.route('/').post(singUp)



module.exports = {singRoute}