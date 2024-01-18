import { useEffect, useState } from "react";
import { RiShieldCheckFill } from "react-icons/ri";

const PriceTable = ({cartItems}) => {

     const [price, setPrice] = useState()
     const [discount, setDiscount] = useState()
     const [totalAmount, setTotalAmount] = useState()

     const packagingFee = 59

     useEffect(()=>{
          calculateTotalAmount()
     },[cartItems])

     const calculateTotalAmount = ()=>{
          let price = 0
          let discount = 0

          cartItems.map((item)=>{
               price += Number(item.price.mrp)
               discount += Number(item.price.cost)
          
          })

          setPrice(price)
          setDiscount(price-discount)
          setTotalAmount(Number(discount))
     }

     return (
          <>
               <div className="bg-white shadow-sm shadow-gray-500">
                              <div className="w-full text-gray-500 border-b border-gray-300 py-2 px-5 font-semibold">
                                   <p>PRICE DETAILS</p>
                              </div>

                              <div className="px-5 text-[#212121]">

                                   <div className="flex flex-row justify-between py-2">
                                        <p>Price({cartItems.length} item)</p>
                                        <p>&#8377;{price}</p>
                                   </div>

                                   <div className="flex flex-row justify-between py-2">
                                        <p>Discount</p>
                                        <p className="text-green-600">{discount}</p>
                                   </div>

                                   <div className="flex flex-row justify-between py-2">
                                        <p>Delivery Charges</p>
                                        <p>
                                             <s className="text-gray-400">-&#8377;120</s>
                                             <span className="text-green-600">{' '}Free</span>
                                        </p>
                                   </div>

                                   <div className="flex flex-row justify-between py-2">
                                        <p>Secured Packaging Fee</p>
                                        <p>&#8377;{packagingFee}</p>
                                   </div>
                              </div>

                              <div className="px-5"> 
                                   <div className="border-t border-b border-dashed border-gray-300 py-4 flex flex-row justify-between items-center font-semibold">
                                   <p >Total Amount</p>
                                   <p>&#8377;{totalAmount}</p>
                                   </div>
                                   <p className="py-2 text-green-600 font-semibold">You will save {discount-packagingFee} on this order</p>
                              </div>

                         </div>

                         <div className="w-full flex text-[14px] p-5 gap-1 items-center justify-center font-semibold">
                              <RiShieldCheckFill size={30} className="text-gray-600" />
                              <p className="text-[#878787]">Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                         </div>
          </>
     );
}

export default PriceTable;