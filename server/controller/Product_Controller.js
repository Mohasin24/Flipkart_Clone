const Product = require('../model/Product_Schema')
const Products = require('../model/Product_Schema')

const GetAllProducts = async(req,res)=>{

     try {
          const response = await Products.find({})

          res.status(200).json(response)
     } catch (error) {
          res.status(500).json({message : error.message})
     }
}

const GetProductDetail = async(req,res)=>{
     try {
          const {id} = req.params
          const response = await Product.findOne({_id:id})
          res.status(200).json(response)
     } catch (error) {
          res.status(500).json({message:error.message})
     }
}

module.exports = {GetAllProducts,GetProductDetail}