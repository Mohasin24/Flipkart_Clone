import { useState} from "react"
import { AuthenticationSignUp } from "../../service/Controller"
import { Operation } from "../../constants/Operations"

const SignUpObj = {
     firstname: "",
     lastname: "",
     username: "",
     email: "",
     mobileNum: "",
     password: "",
}

// Entry point
const RegistartionForm = ({ setOperation, setOpen, setAccount }) => {

     const [data, setData] = useState(SignUpObj)
     const [errMsg, setErrMsg] = useState("")

     // Setting input value on change
     const onInputChange = (e) => {
          const { name, value } = e.target
          setData({ ...data, [name]: value })
     }

     // Form Handling
     const handleForm = async (e) => {

          // preventing the default behaviour of the form
          e.preventDefault()

          try {

               await AuthenticationSignUp(data)

               setOpen(false)

               setAccount(data.firstname)

          } catch (error) {

               if (error.code === "ERR_BAD_REQUEST") {
                    setErrMsg("User already registered ")
               }
               else {
                    setErrMsg("Something went wrong!")
               }

               setTimeout(() => {
                    setErrMsg("")
               }, 3000)
          }

          setData(SignUpObj)

     }

     return (
          <form className="flex flex-col gap-3" action="#" onSubmit={(e) => handleForm(e)}>

               {/* Error message  */}
               {
                    errMsg && <div className="w-full text-center text-red-500">{errMsg}</div>
               }

               {/* form fields */}
               <div>
                    <label>First Name</label>
                    <input onChange={(e) => onInputChange(e)} name="firstname" type="text" className="w-full border-black outline-none border-b-2" value={data.firstname} />
               </div>

               <div>
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => onInputChange(e)} name="lastname" className="w-full border-black outline-none border-b-2" value={data.lastname} />
               </div>

               <div>
                    <label>Username</label>
                    <input type="text" onChange={(e) => onInputChange(e)} name="username" className="w-full border-black outline-none border-b-2" value={data.username} />
               </div>

               <div>
                    <label>Enter Email</label>
                    <input type="email" onChange={(e) => onInputChange(e)} name="email" className="w-full border-black outline-none border-b-2" value={data.email} />
               </div>

               <div>
                    <label>Mobile number</label>
                    <input type="text" onChange={(e) => onInputChange(e)} name="mobileNum" className="w-full border-black outline-none border-b-2" value={data.mobileNum} />
               </div>

               <div>
                    <label>Enter Password</label>
                    <input type="text" onChange={(e) => onInputChange(e)} name="password" className="w-full border-black outline-none border-b-2" value={data.password} />
               </div>

               {/* Buttons */}
               <div className="flex flex-col items-center gap-2">

                    <button type="submit" className="bg-orange-600 active:bg-orange-800 w-full py-1 text-white">Continue</button>

                    <button className="w-full bg-gray-100 py-1 shadow-gray-500 shadow-sm active:bg-gray-300" onClick={() => setOperation(Operation.LOGIN)}>Existing User? Log in</button>
               </div>
          </form>
     )
}

export default RegistartionForm