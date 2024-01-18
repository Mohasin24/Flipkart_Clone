import { superCoinImg } from "../../constants/Data";
import Delivery from "./Delivery";
import TableRow from "./TableRow";

const ProductDetailTable = ({ description }) => {
     return (
          <table class="my-4">
               <tbody className="">
                    

                    <TableRow 
                         title={"Warranty"}
                         data={"1 year warranty against the manufacturing defects"}
                    />

                    <TableRow 
                    
                         title={"Delivery"}
                         data={<Delivery />}
                    />
                    <TableRow 
                    
                         title={"Seller"}
                         data={"7 Days Replacement Policy"}
                    />
                    <TableRow 
                    
                         colSpan={2}
                         data={<img className="w-[300px] h-auto" src={superCoinImg} alt="SuperCoin" />}
                    />
                    <TableRow 
                    
                         title={"Description"}
                         data={description}
                    />
               </tbody>
          </table>
     );
}

export default ProductDetailTable