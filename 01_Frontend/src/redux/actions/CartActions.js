import ApiClient from '../../api/ApiClient'
import { CartConstants } from '../constants/CartConstants'

export const addToCart = (id,quantity)=>async(dispatch)=>
{     
     try {
          const {data} = await ApiClient.get(`/product/${id}`)
          
          dispatch({type : CartConstants.ADD_TO_CART, payload : {...data, quantity}})

     } catch (error) {
          dispatch({type : CartConstants.CART_ERROR, payload : error.message})
     }
}

export const removeFromCart = (id)=>async(dispatch)=>
{
     dispatch({type : CartConstants.REMOVE_FROM_CART, payload : id})
}
