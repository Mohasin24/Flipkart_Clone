import { IoMdSearch } from "react-icons/io";
import CustomButton from "./CustomButton";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useContext, useState } from "react";
import LoginDialog from "../login-registration/LoginDailog";
import { mainLogo } from "../../constants/Data";
import { DataContext } from "../../context/DataContext";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)
  const [open, setOpen] = useState(false);

  const {account, setAccount} = useContext(DataContext)

  return (
    <>
    <div className="w-full h-[55px] bg-blue-600 flex flex-row items-center justify-center">

        <div className="max-w-screen-lg flex flex-row items-center gap-2 md:gap-8">
        
        {/* Logo */}
        <Link to={`/`}>
        <div className="text-white line-h-0 cursor-pointer">
          <img src={mainLogo.img1} alt="" className="w-16 md:w-24 "/>
          <button className="hidden md:flex flex-row items-center gap-1 hover:underline">Explore <span className="hidden md:text-yellow-400">Plus</span>
          <img src={mainLogo.img2} alt="" className="w-3"/>
          </button>
        </div>
        </Link>
        {/* Search bar */}
        <div className="flex flex-row items-center">
          <input
            type="text"
            className="sm:w-80 md:w-full lg:w-80 h-[30px] outline-none p-2 "
            placeholder="Search for products, brands and more..."
          />
          <p className="relative -left-6 cursor-pointer text-blue-700 bg-white z-5">
            <IoMdSearch size={20} />
          </p>
        </div>

        {/* Buttons and cart */}
        <div className="hidden md:flex flex-row gap-1" >

          {/* <CustomButton
            text={"Login"}
            bgColor={"bg-white"}
            btnColor={"text-blue-700"} 
            operation={()=>setOpen(false)}
          /> */}


          {
            account ? 
            
            // <button className="bg-white text-blue-700 px-5 active:bg-blue-700 active:text-white">{account}</button> 
            <Profile account={account} setAccount={setAccount} />
            : 
            <button className="bg-white text-blue-700 px-5 active:bg-blue-700 active:text-white" onClick={()=>setOpen(true)}>Login</button>
          }

          

          <CustomButton text={"Become a seller"} btnColor={"text-white"} />
          <CustomButton text={"More"} btnColor={"text-white"} />

          <div className="text-white flex flex-row items-center gap-1 cursor-pointer">
            <FaShoppingCart />
            <p>Cart</p>
          </div>
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden text-white cursor-pointer">
            
            <FaBars size={20} onClick={()=>setMenuOpen(!isMenuOpen)}/>
        </div>
      </div>
  
      {
          isMenuOpen &&
          <div className=" h-full w-full bg-blue-600 absolute left-0 top-0">
            <MdClose className="z-50 text-white absolute top-6 right-6" size={30} onClick={()=>setMenuOpen(!isMenuOpen)}/>

            {/* Buttons and cart */}
            <div className=" ">
            <div className="w-2/3 h-full bg-gray-500 flex flex-col items-center justify-center gap-1">
          
          <CustomButton
            text={"Login"}
            bgColor={"bg-white"}
            btnColor={"text-blue-700"}
          />
          <CustomButton text={"Become a seller"} btnColor={"text-white"} />
          <CustomButton text={"More"} btnColor={"text-white"} />

          <div className="text-white flex flex-row items-center gap-1 cursor-pointer">
            <FaShoppingCart />
            <p>Cart</p>
          </div>
        </div>
            </div>
          </div>
        }
    </div>
    
        <LoginDialog open={open} setOpen={setOpen} />
   
    <div/>
    </>
  );
};

export default Header;
