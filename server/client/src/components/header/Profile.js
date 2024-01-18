import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Profile = ({ account, setAccount }) => {
     const [isMenuOpen, setMenuOpen] = useState(false);


     const MenuItems = [
          {
               id: 1,
               item: "Profile",
               callback: () => {
                    console.log("profile")

                    setMenuOpen(false)
               }
          },
          {
               id: 2,
               item: "My Account",
               callback: () => {
                    console.log("Account")
                    setMenuOpen(false)
               }
          },
          {
               id: 3,
               item: "Logout",
               callback: () => {
                    console.log("Logout")
                    setAccount('')
                    setMenuOpen(false)
               }
          }

     ]

     const toggleMenu = () => {
          setMenuOpen(!isMenuOpen);
     };

     return (
          <div className="bg-white text-black px-2 flex flex-col items-center z-40">
               <button className="z-20" onClick={toggleMenu}>{account}</button>
               {isMenuOpen && (
                    <div className="felx flex-col items-center absolute top-8" >
                         <div className="relative -bottom-1 w-fit mx-auto bg-white">
                              <IoIosArrowDown />
                         </div>
                         <div className="flex flex-col items-center border-2 bg-white p-4 z-50 rounded-md">

                              <div className="">
                                   <ul>
                                        {
                                             MenuItems.map(({ id, item, callback }) => (
                                                  <li
                                                       onClick={callback} key={id} className="cursor-pointer hover:bg-gray-300 p-1">{item}</li>
                                             ))
                                        }
                                   </ul>
                              </div>
                         </div>
                    </div>


               )}
          </div>
     );
};

export default Profile;