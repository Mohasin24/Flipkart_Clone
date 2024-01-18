import { useEffect, useState, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { loginDiaImg } from "../../constants/Data";
import RegistartionForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import { Operation } from '../../constants/Operations'
import { DataContext } from "../../context/DataContext"

const operationObj = {
  login: {
    view: Operation.LOGIN
  },
  signup: {
    view: Operation.SIGNUP
  }
}


const LoginDialog = ({ open, setOpen }) => {

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "scroll";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [open]);

  const {setAccount} = useContext(DataContext)

  const [operation, setOperation] = useState(operationObj.login.view)

  const handleClick = (e) => {
    e.stopPropagation();
  }

  const closeDialog = () => {
    setOpen(false)
    // setCheck(false)
    setOperation(Operation.LOGIN)
  }

  return (
    <>
      {open && (
        <div
          className="min-h-screen min-w-full bg-white absolute bg-opacity-70 z-10 top-0 "
          onClick={closeDialog}>

          {/* Inner container */}

          <div className="max-h-[80vh] min-w-[60%] z-20 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll"
            onClick={handleClick}
          >
            <div className="absolute right-0 p-2 cursor-pointer">
              <IoMdClose size={20} onClick={closeDialog} />
            </div>

            {/* main container */}

            <div className="w-full grid grid-cols-3 ">

              {/* Left section with image and current state login/registration */}

              <div className="col-span-1 bg-blue-600 p-10 flex flex-col justify-between">

                {

                  operationObj.signup.view === operation &&
                  <div className="text-white">
                    <p className="font-bold text-2xl pb-2">Looks like you're new here!</p>
                    <p>Sign up with your mobile number or email to get started</p>
                  </div>

                }
                {

                  operationObj.login.view === operation &&
                  <div className="text-white">
                    <p className="font-bold text-2xl pb-2">Login</p>
                    <p>Get Access to you Orders, Wishlist and Recommendations</p>
                  </div>
                }

                <img src={loginDiaImg} alt="" />
              </div>
              {/* END */}


              {/* Login and Registartion section || check the state if true displays registartion page else displays login page*/}

              <div className="col-span-2 bg-white flex flex-col gap-4 p-10 ">
                {
                  operationObj.signup.view === operation &&
                  <RegistartionForm setOperation={setOperation} setOpen={setOpen} setAccount={setAccount}/>

                }
                {
                  operationObj.login.view === operation && <LoginForm setOperation={setOperation} setOpen={setOpen}  setAccount={setAccount} />
                }

              </div>

              {/* END */}

            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginDialog;
