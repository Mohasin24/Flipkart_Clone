const express = require('express');
const { v4: uuid } = require('uuid');
const cors = require('cors')
const DbConnection = require('./db/DbConnecrtion');
// const DefaultData = require('./DefaultData')
const Router = require('./route/route')
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 3000   
const URI = process.env.URI

app.use(cors())
app.use(express.json())
app.use("/api/v1", Router)

if(process.env.NODE_ENV === 'production'){
     app.use(express.static('client/build'))
}


const start = async()=>{
     try {
          await DbConnection(URI)
          app.listen(PORT,()=>{
               console.log(`Listening on port ${PORT}`)
          })
          // DefaultData()
     } catch (error) {
          console.log(error)
     }
}

start();

let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY
let paytmParams = {}
paytmParams['MID'] = process.env.PAYTM_MID
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID
paytmParams['ORDER_ID'] = uuid()
paytmParams['TXN_AMOUNT'] = '100'
paytmParams['CALLBACK_URL'] = 'http://localhost:3232//api/v1/callback'
paytmParams['EMAIL'] = 'hiremohasin@gmail.com'
paytmParams['MOBILE_NO'] = '1234567890'


module.exports={paytmMerchantKey,paytmParams}