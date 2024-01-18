const paytmchecksum = require('../paytm/PaytmChecksum')
const {paytmMerchantKey,paytmParams} = require('../index')

const paymentGateway = async(req,res)=>{
     
     try {
          let paytmChecksum = await paytmchecksum.generateSignature(paytmParams,paytmMerchantKey)

          let params = {
               ...paytmParams, 'CHECKSUM' : paytmChecksum
          }

          res.status(200).json(params)
     } catch (error) {
          res.status(500).json({msg:error.message})
     }
}

module.exports=paymentGateway