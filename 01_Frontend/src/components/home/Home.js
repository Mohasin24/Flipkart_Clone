import { useEffect } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/ProductAction";
import { useSelector } from "react-redux";
import Slides from "./Slides";

     
const Home = ()=>{

     const {product} = useSelector(state=>state.getProducts)

     const dispatch = useDispatch()

     useEffect(()=>{
         dispatch(getAllProducts())
     },[dispatch])

   

     return(
          <div className="p-1 bg-gray-300 min-h-screen">
               <Navbar />
               <Banner />
               <Slides product={product} title="Top Deals" />
               <Slides product={product} title="End of Season Bestsellers" />
               <Slides product={product} title="Best of Electronics" />
               <Slides product={product} title="Travel Essential Picks" />
               <Slides product={product} title="Gifting Collection " />
          </div>
     );
}

export default Home;