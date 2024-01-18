import DisplayOffers from "./DisplayOffers";
import { Offers } from "../../constants/Data";
import { useState } from "react";


const ProductDetailInfo = () => {

     const initialDisplayCount = 4

     const [displayCount, setDisplayCount] = useState(initialDisplayCount)

     return (
          <div className="p-2">
               <p>Available offers</p>

               {
                    Offers
                    .slice(0,displayCount)
                    .map(({ id, type, offer }) => (
                         <DisplayOffers
                              key={id}
                              offerType={type}
                              offer={offer}
                         />
                    ))
               }

               {
                    displayCount < Offers.length &&
                    <p 
                    className="text-blue-600 font-semibold p-2 cursor-pointer"
                    onClick={()=>setDisplayCount(Offers.length)}
                    >View {Offers.length - displayCount} more offers</p>
               }             
          </div>
     );
}

export default ProductDetailInfo;
