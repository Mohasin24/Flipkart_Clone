
const policy = [
     {
          id: 1,
          text: "Returns Policy"
     },
     {
          id: 2,
          text: "Terms of use"
     },
     {
          id: 3,
          text: "Security"
     },
     {
          id: 4,
          text: "Privacy"
     },
     {
          id: 5,
          text: "Infringement"
     }
]

const CartFooter = () => {

     const date = new Date().getFullYear()

     return (
          <div className="h-auto w-full flex flex-col md:flex-row items-center justify-center flex-wrap border-t border-[#b3b3b3] text-[#565656] text-[14px] py-6 px-4 gap-4 sm:gap-0">

               <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center">
                    <p>Policies:</p>
                    <ul className="flex flex-col sm:flex-row flex-wrap">
                         {
                              policy.map(({ id, text }) =>
                              (
                                   <li
                                        key={id}
                                        className={`text-center px-[5px] cursor-pointer
                                             ${policy[policy.length - 1].id === id ? `border-none` : `sm:border-r sm:border-gray-500`}`
                                        }
                                   >{text}</li>
                              )

                              )
                         }
                    </ul>
               </div>
               
                    <p className="md:ml-4 md:mr-16">&copy;2007-{date} Flipkart.com</p>
                    <p>Need help? Visit the <span className="text-[#2874f0] cursor-pointer">Help Center</span> or <span className="text-[#2874f0] cursor-pointer">Contact Us</span></p>
               
   
          </div>
     );
}

export default CartFooter;
