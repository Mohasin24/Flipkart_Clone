import { CartConstants } from "../constants/CartConstants";

const cartReducer = (state = {cartItems:[]}, {type,payload})=>{

     switch(type){
          case CartConstants.ADD_TO_CART :
               
               const exist = state.cartItems.find(product => product.id===payload.id)
               
               if(exist)
               {
                    return {...state, cartItems : state.cartItems.map(data => data.product === exist.product ? payload : data)}
               }else
               {
                    return {...state, cartItems : [...state.cartItems,payload]}
               }

          case CartConstants.REMOVE_FROM_CART : 
               return {...state, cartItems : state.cartItems.filter(product => product._id !== payload)}    
          default : 
               return state;     
     }
}

export default cartReducer;