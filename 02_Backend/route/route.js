const express = require('express')
const {AuthenticationSignup,AuthenticationLogin} = require('../controller/Controller')

const router = express.Router()

router.route('/signup').post(AuthenticationSignup)
router.route('/login').post(AuthenticationLogin)

module.exports = router

