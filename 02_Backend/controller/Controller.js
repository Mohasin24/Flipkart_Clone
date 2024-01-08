const User = require('../model/User_Schema');

const AuthenticationSignup = async (req,res)=>{
     

     try {
          const currUser = req.body;

          const userExists = await User.findOne({username : currUser.username})

          // if(userExists)
          // {
          //      res.status(401).json({msg : "User already exists"})
          //      return
          // }

          const newUser =  new User(currUser)

          const response = await newUser.save()

          res.status(200).json({msg : "Successful"})
     } catch (error) {
          console.log(error)
          res.status(500).json(error)
     }
}

const AuthenticationLogin = async(req, res)=>{

     try {
          const currUser = req.body

          const validatedUser = await User.findOne({email : currUser.email, password : currUser.password})

          if(validatedUser)
          {
               console.log(validatedUser)
               res.status(200).json({data:validatedUser})
          }else{
               console.log(validatedUser)
               res.status(404).json({message : "User not registered"})
          }
          
     } catch (error) {
          console.log(error)
          res.status(500).json(error)
     }
     
}

module.exports = {AuthenticationSignup, AuthenticationLogin}

9765728344