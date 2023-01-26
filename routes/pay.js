const express = require('express')
const {initEventPay,verifyPayment} = require('../helper/paystack')
const router = express.Router();


router.route('/payForTicket').post(initEventPay);
router.route('/verify/:reference').get(verifyPayment)




module.exports = router