const Product = require('./model/Product_Schema')
const {products} = require('./constants/Data')

const DefaultData = async()=>{
     try {
          // await Product.deleteMany()
          await Product.insertMany(products)
          console.log("Data Successfully inserted")
     } catch (error) {
          console.log("Error while inserting default data " + error.message)
     }
}

module.exports = DefaultData