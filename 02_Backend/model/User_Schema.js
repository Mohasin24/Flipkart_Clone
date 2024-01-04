const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
     firstname : {
          type : String,
          required : true,
          trim : true
     },
     lastname : {
          type : String,
          required : true,
          trim : true
     },
     email : {
          type : String,
          required : true,
          // unique : true,
          trim : true,
          lowercase : true
     },
     mobileNum : {
          type : String,
          required : true,
          // unique : true,
          trim : true,
          min : [10, "Mobile number must be 10 digits."],
          max:[10, "Mobile number must be 10 digits."]
     },
     password : {
          type : String,
          required : true,
          trim : true,
          min : [8, "Length of password must be 8 characters."]
     }
})

const UserModel = mongoose.model('user_details', userSchema)

module.exports = UserModel;