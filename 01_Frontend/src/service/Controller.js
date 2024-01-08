import ApiClient from "../api/ApiClient"

export const AuthenticationSignUp = async (payload)=>{

     return await ApiClient.post('/signup',payload)
}

export const AuthenticationLogin = async (payload)=>{

     return await ApiClient.post('/login',payload)
}
