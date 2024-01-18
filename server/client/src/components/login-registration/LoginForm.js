import {useState } from "react"
import { Operation } from "../../constants/Operations"
import { AuthenticationLogin } from "../../service/Controller"

const LoginObj = {
  email: "",
  password: ""
}

// Entry point
const LoginForm = ({ setOperation, setOpen, setAccount }) => {

  const [data, setData] = useState(LoginObj)
  const [errMsg, setErrMsg] = useState("")

  // Setting input value on change
  const onInputChange = (e) => {

    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }

  //Login Form Handling
  const handleForm = async (e) => {
    e.preventDefault()

    try {

      let responese = await AuthenticationLogin(data);

      if (responese.status === "OK" || responese.status === 200) {
        const userFirstName = responese.data.data.firstname
        
        setData(LoginObj)
        setAccount(userFirstName)
        setOpen(false)
      }

    } catch (error) {

      if (error.code === "ERR_BAD_REQUEST") {
        setErrMsg("User not registered ")
      }
      else {
        setErrMsg("Something went wrong!")
      }

      setTimeout(() => {
        setErrMsg("")
      }, 3000)

    }


    // setData(LoginObj)
  }
  return (
    <div className="flex flex-col items-center gap-4">

      {/* Error message  */}
      {
        errMsg && <div className="w-full text-center text-red-500">{errMsg}</div>
      }

      <form className="flex flex-col gap-3" action="#" onSubmit={(e) => handleForm(e)}>
        <div>
          <label>Enter Email/Mobile number</label>
          <input type="email" onChange={(e) => onInputChange(e)} name="email" className="w-full border-black outline-none border-b-2" value={data.email} required />
        </div>

        <div>
          <label>Enter Password</label>
          <input type="text" onChange={(e) => onInputChange(e)} name="password" className="w-full border-black outline-none border-b-2" value={data.password} required />
        </div>

        <p className="text-gray-500 text-[0.8rem]">By continuing, you agree to Flipkart's <span className="text-blue-700 cursor-pointer">Terms of use </span>and <span className="text-blue-700 cursor-pointer">Privacy policy</span></p>


        <button type="submit" className="bg-orange-600 active:bg-orange-800 w-full py-1 text-white">Login</button>

      </form>

      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-[0.8rem]">OR</p>
        <button className="w-full bg-gray-100 py-1 shadow-gray-500 shadow-sm active:bg-gray-300">Request OTP</button>

        <p className="text-[0.8rem] text-blue-700 font-bold cursor-pointer" onClick={() => setOperation(Operation.SIGNUP)}>New to Flipkart? Create an account</p>
      </div>
    </div>
  )
}

export default LoginForm