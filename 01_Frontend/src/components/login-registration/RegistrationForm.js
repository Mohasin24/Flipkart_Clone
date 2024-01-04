import { useState } from "react"
import { AuthenticationSignUp } from "../../service/Controller"

const SignUpObj = {
     firstname: "",
     lastname: "",
     email: "",
     mobileNum: "",
     password: "",
}


// Entry point
const RegistartionForm = ({ setCheck }) => {


     const [data, setData] = useState(SignUpObj)


     // Setting input value on change
     const onInputChange = (e) => {
          const { name, value } = e.target

          setData({ ...data, [name]: value })
     }

     // Form Handling
     const handleForm = (e) => {
          e.preventDefault()
          
          AuthenticationSignUp(data)

          setData(SignUpObj)
     }

     return (
          <form className="flex flex-col gap-3" action="#" onSubmit={(e) => handleForm(e)}>
               <div>
                    <label>First Name</label>
                    <input onChange={(e) => onInputChange(e)} name="firstname" type="text" className="w-full border-black outline-none border-b-2" value={data.firstname} />
               </div>
               <div>
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => onInputChange(e)} name="lastname" className="w-full border-black outline-none border-b-2" value={data.lastname} />
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


               <div className="flex flex-col items-center gap-2">

                    <button type="submit" className="bg-orange-600 active:bg-orange-800 w-full py-1 text-white">Continue</button>

                    <button className="w-full bg-gray-100 py-1 shadow-gray-500 shadow-sm active:bg-gray-300" onClick={() => setCheck(false)}>Existing User? Log in</button>
               </div>
          </form>
     )
}

export default RegistartionForm