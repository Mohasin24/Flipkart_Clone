import { ProductConstant } from "../constants/ProductConstants";

export const getProductReducer = (state={product : []}, {type, payload})=>{

     switch(type)
     {
          case ProductConstant.GET_PRODUCTS_SUCCESS :
               return {product : payload}
          case ProductConstant.GET_PRODUCTS_FAIL :
               return {error : payload}
          default : 
               return state;
     }
}

export const getProductDetailsReducer = (state={product:{}}, {type, payload}) =>{
     switch(type)
     {
          case ProductConstant.GET_PRODUCT_DETAILS_SUCCESS :
               return {product:payload}
          case ProductConstant.GET_PRODUCT_DETAILS_FAIL :
               return {error:payload}
          case ProductConstant.GET_PRODUCT_DETAILS_RESET : 
               return {product : {}}     
          default :
               return state
     }
}

