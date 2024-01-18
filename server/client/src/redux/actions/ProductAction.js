import ApiClient from '../../api/ApiClient'
import {ProductConstant} from '../constants/ProductConstants'

export const getAllProducts = () => async(dispatch)=> {

     try {
          const response = await ApiClient.get('/products')
          const {data} = response;

          dispatch({type : ProductConstant.GET_PRODUCTS_SUCCESS, payload : data})
     } catch (error) {
          dispatch({type : ProductConstant.GET_PRODUCTS_FAIL, payload : error.response})
     }

}

export const getProductDetails=(id)=>async(dispatch)=>{

     try {
          const response = await ApiClient.get(`/product/${id}`)
          const {data} = response

          dispatch({type : ProductConstant.GET_PRODUCT_DETAILS_SUCCESS, payload:data})
     } catch (error) {
          dispatch({type:ProductConstant.GET_PRODUCT_DETAILS_FAIL, payload:error.message})
     }

}