import CartFooter from "./CartFooter";
import { useEffect, useState } from "react";
import LoginDialog from "../login-registration/LoginDailog";
import { useSelector } from "react-redux";
import PriceTable from "./PriceTable";
import CartItem from "./CartItem";
import PlaceOrderBtn from "./PlaceOrderBtn";

const Cart = () => {


     const [open, setOpen] = useState(false)

     const { cartItems } = useSelector(state => state.cart)



  // Retrieve cartItems from local storage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log(storedCartItems)
  }, []);

     return (
          <div className="h-full w-full bg-[#F1F3F6]">

               {
                    cartItems.length > 0 && 
                    <div className="w-full mx-auto grid grid-cols-12 gap-4 px-4 py-5">
                         <div className="h-fit col-span-8">
                              {
                                   cartItems.length > 0 &&
                                   cartItems.map((item)=>(
                                        <CartItem item={item} />
                                   ))
                              }

                              <PlaceOrderBtn item={cartItems} />
                         </div>
                         <div className=" h-fit col-span-4">
                              <PriceTable cartItems={cartItems} />
                         </div>
                    </div>
               }

               <CartFooter />
               <LoginDialog open={open} setOpen={setOpen} />

          </div>
     );
}

export default Cart;


/** 
 * 
*/