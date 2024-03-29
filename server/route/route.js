const express = require('express')
const {AuthenticationSignup,AuthenticationLogin} = require('../controller/Controller')
const {GetAllProducts,GetProductDetail} = require('../controller/Product_Controller')
const paymentGateway  = require('../controller/Payment_Controller')

const router = express.Router()

router.route('/signup').post(AuthenticationSignup)
router.route('/login').post(AuthenticationLogin)
router.route('/products').get(GetAllProducts)
router.route('/product/:id').get(GetProductDetail)
router.route('/payment').post(paymentGateway)

module.exports = router

