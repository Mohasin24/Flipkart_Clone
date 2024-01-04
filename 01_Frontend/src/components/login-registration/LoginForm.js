import { useState } from "react"

const LoginObj = {
  email: "",
  password: ""
}

// Entry point
const LoginForm = ({ setCheck }) => {

  const [data, setData] = useState(LoginObj)

  // Setting input value on change
  const onInputChange = (e) => {

    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }

  // Form Handling
  const handleForm = (e) => {
    e.preventDefault()

    console.log(data)

    setData(LoginObj)
  }
  return (
    <div>
      <form className="flex flex-col gap-3" action="#" onSubmit={(e) => handleForm(e)}>
        <div>
          <label>Enter Email/Mobile number</label>
          <input type="email" onChange={(e) => onInputChange(e)} name="email" className="w-full border-black outline-none border-b-2" value={data.email} />
        </div>

        <div>
          <label>Enter Password</label>
          <input type="text" onChange={(e) => onInputChange(e)} name="password" className="w-full border-black outline-none border-b-2" value={data.password} />
        </div>

        <p className="text-gray-500 text-[0.8rem]">By continuing, you agree to Flipkart's <span className="text-blue-700 cursor-pointer">Terms of use </span>and <span className="text-blue-700 cursor-pointer">Privacy policy</span></p>


        <button type="submit" className="bg-orange-600 active:bg-orange-800 w-full py-1 text-white">Login</button>

      </form>

      <div className="flex flex-col items-center gap-2">
        <p className="text-[0.8rem]">OR</p>
        <button className="w-full bg-gray-100 py-1 shadow-gray-500 shadow-sm active:bg-gray-300">Request OTP</button>

        <p className="text-[0.8rem] text-blue-700 font-bold cursor-pointer" onClick={() => setCheck(true)}>New to Flipkart? Create an account</p>
      </div>
    </div>
  )
}

export default LoginForm