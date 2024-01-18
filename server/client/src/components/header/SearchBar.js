import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/ProductAction";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchBar = () => {

     const [input, setInput] = useState('')

     const inputChange = (e) => {
          setInput(e.target.value)
     }

     const {product} = useSelector(state=>state.getProducts)

     const dispatch = useDispatch()

     useEffect(()=>{
          dispatch(getAllProducts())
     },[dispatch])

     let filteredProducts = null;

     if(product)
     {
          
          filteredProducts=product.filter((item)=>(
               item.title.longTitle.toLowerCase().includes(input.toLowerCase())
          ))
     }

     console.log(product)

     return (
          <div className="">
               <div className="flex flex-row items-center">
                    <input
                         type="text"
                         className="sm:w-80 md:w-full lg:w-80 h-[30px] outline-none p-2 "
                         placeholder="Search for products, brands and more..."
                         onChange={(e) => inputChange(e)}
                         value={input}
                    />

                    <div className="relative -left-6 cursor-pointer text-blue-700 bg-white z-5">
                         <IoMdSearch size={20} />
                    </div>
               </div>
               
               {
                    input &&
                    <div className="bg-white sm:w-80 md:w-full lg:w-80 max-h-screen absolute top-10 z-50 border-t-2 border-gray-400 py-5 px-2">

                         <ul>
                         {
                              filteredProducts && filteredProducts.map(({title, _id})=>(
                                   <li className="cursor-pointer">
                                        <Link 
                                        to={`/product/${_id}`}
                                        target="_blank"
                                        onClick={()=>setInput('')}     
                                        >
                                        {
                                             title.longTitle
                                        }
                                        </Link>
                                   </li>
                              ))
                         }
                         </ul>
                         
                    </div>
               }

          </div>
     );
}

export default SearchBar;