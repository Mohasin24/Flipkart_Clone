const UserModel = require('../model/User_Schema');

const AuthenticationSignup = async (req,res)=>{
     

     try {
          const User =  new UserModel(req.body)
          const response = await User.save()
          console.log(response)
          res.status(200).json({msg : "Successful"})
     } catch (error) {
          console.log(error)
          res.status(500).json({msg:"Something went wrong on server!"})
     }
}

const AuthenticationLogin = (req, res)=>{
     console.log(req.body)
}

module.exports = {AuthenticationSignup, AuthenticationLogin}