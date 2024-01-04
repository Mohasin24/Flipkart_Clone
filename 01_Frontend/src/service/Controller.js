import ApiClient from "../api/ApiClient"

export const AuthenticationSignUp = async (payload)=>{
     try {
          await ApiClient.post('/signup',payload)
     } catch (error) {
          console.log(`SignUp error ${error.msg}`)
     }
}