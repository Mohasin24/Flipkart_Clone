const { default: mongoose } = require("mongoose")

const DbConnection = (uri)=>{
     return mongoose.connect(uri)
}

module.exports=DbConnection