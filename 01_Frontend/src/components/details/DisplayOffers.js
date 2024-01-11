import { FaTag } from "react-icons/fa";

const DisplayOffers = ({offer, offerType})=>{
     return(
          <div className=" mt-3 inline-flex gap-1 items-baseline ">
               <FaTag className="text-green-700" size={15}/>
               <p>
                    <span className="font-bold">{offerType + ' '}</span>
                    <span>{offer + ' '}</span>
                    <span className="text-blue-600 font-semibold cursor-pointer"> T&amp;C</span>
               </p>
          </div>
     );
}

export default DisplayOffers;