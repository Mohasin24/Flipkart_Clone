import { createStore } from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import {thunk} from 'redux-thunk'
import { applyMiddleware, combineReducers } from 'redux'
import { getProductDetailsReducer, getProductReducer } from './reducers/getProductReducer'
import cartReducer from './reducers/cartReducer'
   
const reducer = combineReducers({
     getProducts : getProductReducer,
     getProductDetails : getProductDetailsReducer,
     cart : cartReducer
})

const middleware = [thunk]

const productStore  = createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
);

export default productStore;