import { navData } from "../../constants/Data";

const Navbar = ()=>{
     return(
          <ul className="flex flex-row justify-evenly items-center bg-white">
               {
                    navData.map(({url,text},index)=>(
                         <li key={index}>
                              <div className="flex flex-col items-center p-1 justify-center">
                                   <img src={url} alt={text} className="w-12 md:w-16"/>
                                   <p className="text-[0.4rem] md:text-base">{text}</p>
                              </div>
                         </li>
                    ))
               }
          </ul>
     )
}

export default Navbar;