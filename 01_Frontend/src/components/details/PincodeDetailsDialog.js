import { useEffect, useRef } from "react";


const PincodeDetailsDialog = ({ open, setOpen }) => {

     const dialogRef = useRef(null)

     useEffect(()=>{

          const handleOutSideClick = (event)=>{
               console.log("clicked")
               if(dialogRef.current && !dialogRef.current.contains(event.target))
               {
                    setOpen(false)
               }
          }

          document.addEventListener("click", handleOutSideClick)
          

          return(
               document.removeEventListener("click",handleOutSideClick)
          )
     },[])


     return (
          <div
               ref={dialogRef}
               className="h-auto w-auto bg-gray-500 bg-opacity-70 absolute z-50 top-[50%] translate-x-[50%] right-[50%]"
          >
               <div className="">

                    sjdddfkfkfgggggghjfdjfdljfj

               </div>
          </div>
     );
}

export default PincodeDetailsDialog


