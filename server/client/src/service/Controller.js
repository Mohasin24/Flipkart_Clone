import ApiClient from "../api/ApiClient"

export const AuthenticationSignUp = async (payload)=>{

     return await ApiClient.post('/signup',payload)
}

export const AuthenticationLogin = async (payload)=>{

     return await ApiClient.post('/login',payload)
}

export const payUsingPaytm = async(data)=>{
     try {
          let response = await ApiClient.post('/payment',data)
          return response.data;
     } catch (error) {
          console.log("Payment Error ", error.message)
     }
}
