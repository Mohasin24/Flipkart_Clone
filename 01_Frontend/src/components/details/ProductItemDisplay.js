import { addToCart } from "../../redux/actions/CartActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { payUsingPaytm } from "../../service/Controller";
// import { post } from "../../utils/Paytm";

const ProductItemDisplay = ({product})=>
{
     const id = product._id

     const dispatch = useDispatch();
     const navigate = useNavigate()

     const quantity = 1
     
     const addItemToCart = ()=>{
          navigate("/product/cart")
          dispatch(addToCart(id, quantity))
          
     }

     // const buyNow = ()=>{
          
     //      let response = payUsingPaytm({amount : 100, email : 'example@gmail.com'})

     //      const information = {
     //           action : "https://securegw-stage.paytm.in/order/process",
     //           params : response
     //      }

     //      post(information)
     // }

     return(
         <div className="md:p-4">
          <img className="mx-auto w-[70%] md:w-[90%] h-auto" src={product.detailUrl} alt="Product" />
          <div className="text-white flex justify-evenly gap-2 my-2">
               <button 
                    className="bg-amber-500 w-full p-2"
                    onClick={addItemToCart}
               >
                    ADD TO CART</button>
               <button 
                    className="bg-orange-500 w-full p-2"
               >
                    BUY NOW
               </button>
          </div>
         </div>
     );
}

export default ProductItemDisplay;