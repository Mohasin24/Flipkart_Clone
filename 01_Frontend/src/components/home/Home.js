import Banner from "./Banner";
import Navbar from "./Navbar";

const Home = ()=>{
     return(
          <div className="p-1 bg-gray-300 min-h-screen">
               <Navbar />
               <Banner />
          </div>
     );
}

export default Home;