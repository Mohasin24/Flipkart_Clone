import { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Delivery = () => {

     const [check, setCheck] = useState(false)
     const [pinCheck, setPinCheck] = useState(false)
     const [pin, setPin] = useState('')
     const [err, setError] = useState(false)

     const deliveryRef = useRef(null)

     useEffect(() => {

          const handleClickOutside = (event) => {
               if (deliveryRef.current && !deliveryRef.current.contains(event.target)) {
                    setCheck(false)
               }
          }

          document.addEventListener("click", handleClickOutside);

          return () => {
               document.removeEventListener("click", handleClickOutside);
          }

     }, [])

     const handlePin = (e) => {

          if (pinCheck) {
               setPinCheck(false)
          }

          setPin(e.target.value)
     }

     const handleSubmit = (e) => {

          e.preventDefault()

          if (pin.length !== 6) {

               setError(true)

               setTimeout(() => {
                    setError(false)
               }, 2000)

               return
          }

          setPinCheck(true)

     }

     let date = new Date()
     date.setDate(new Date().getDate() + 3)
     let deliveryDate = date.toDateString()

     return (
          <div>
               <div className="w-full">
                    <form
                         ref={deliveryRef}
                         onSubmit={(e) => handleSubmit(e)}
                         className="flex items-center gap-2 border-b-2 border-blue-600 w-fit p-1">

                         <FaLocationDot size={10} color={check ? 'blue' : 'gray'} />

                         <input
                              className="outline-none border-none"
                              type="text"
                              placeholder="Enter Delivery Pincode"
                              onFocus={() => setCheck(true)}
                              onChange={(e) => handlePin(e)}
                              name="pin_input"
                         />

                         <button type="submit" className="text-blue-600 font-semibold active:text-blue-800 active:scale-110">Check</button>
                    </form>

                    {
                         err && <p className="text-red-500">Enter valid pin code</p>
                    }

                    {
                         pinCheck && <p className="text-gray-500">Delivery by {deliveryDate} | <span className="text-green-700 font-semibold">Free </span><s>&#8377;40</s></p>
                    }

                    {/* Add popup menu on view details click */}
                    <p
                         className="text-blue-600 font-semibold cursor-pointer"
                    >
                         View Details
                    </p>


               </div>
          </div>
     );
}

export default Delivery