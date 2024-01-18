import { fassured } from "../../constants/Data";
import { FaCircleExclamation } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/CartActions";
import { useState } from "react";

const CartItem = ({item}) => {

     const dispatch = useDispatch()
     const[itemQuantity, setQuantity] = useState(1)

     const shortenTitle = (title)=>{
          let newTitle = title.substring(0,45) + '....'
          return newTitle
     }

     const packagingFee = 59;

     const removeItemFromCart = (id)=>{
          dispatch(removeFromCart(id))
     }

     const handleChange = (event)=>{
          setQuantity(Number(event.target.value))
     }

     return (

          <div className="bg-white shadow-sm shadow-gray-500 p-5 border-t border-gray-400">
               <div className="flex flex-row justify-around">
                    <div>
                         <img
                              src={item.url}
                              alt="Product"
                              className="w-20 h-28"
                         />
                    </div>

                    <div>
                         <p>{shortenTitle(item.title.longTitle)}</p>
                         <div className="flex flex-row items-center gap-2">
                              <p className="text-[14px] text-gray-500 py-2">Seller:MTAILMODEECOM</p>
                              <img
                                   src={fassured}
                                   alt="Flipkart Assured"
                                   className="w-14 h-3"
                              />
                         </div>

                         <div className="flex flex-row items-center gap-2">
                              <s className="text-[14px]">&#8377;{item.price.mrp}</s>
                              <p className="text-[18px]">&#8377;{item.price.cost}</p>
                              <p className="text-[14px] text-green-600">{item.discount}</p>
                              <p className="text-green-600 font-semibold text-[14px]">2 offers applied</p>
                              <FaCircleExclamation className="text-green-600" size={12} />
                         </div>
                         <p className="text-[14px]">+ &#8377;{packagingFee} Secured Packaging Fee</p>
                    </div>

                    <div className="flex flex-row gap-1 text-[14px]">
                         <p>Delivery by Thu Jan 25 |</p>
                         <s className="text-gray-500">&#8377;120</s>
                         <p className="text-green-600">Free</p>
                    </div>

               </div>

               <div className="flex flex-row gap-5 mt-8">
                    <div className="flex flex-row items-center gap-2">

                         <CiCircleMinus 
                              size={30} 
                              className="cursor-pointer" 
                              onClick={()=>{
                                   if(itemQuantity>1){setQuantity(itemQuantity-1)}
                              }}
                         />

                         <input 
                              type="text" 
                              className="border border-gray-400 w-10 py-1 text-[12px] text-center font-bold outline-none"  
                              value={itemQuantity} 
                              onChange={(event)=>handleChange(event)}
                         />

                         <CiCirclePlus 
                              size={30} 
                              className="cursor-pointer" 
                              onClick={()=>setQuantity(itemQuantity+1)}
                         />
                    </div>

                    <p className="font-semibold hover:text-blue-600 cursor-pointer">SAVE FOR LATER</p>
                    <p 
                         className="font-semibold hover:text-blue-600 cursor-pointer"
                         onClick={()=>removeItemFromCart(item._id)}
                    >
                         REMOVE
                    </p>

               </div>
          </div>
     );
}

export default CartItem;