import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/ProductAction";
import ProductItemDisplay from "./ProductItemDisplay";
import { FaStar } from "react-icons/fa";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailTable from "./ProductDetailTable";
import { fassured } from "../../constants/Data";

const ProductDetailView = () => {

     const { product } = useSelector(state => state.getProductDetails)

     const { id } = useParams();

     const dispatch = useDispatch()

     useEffect(() => {
          if (product._id !== id) {
               dispatch(getProductDetails(id))
          }
     }, [dispatch, product._id, id])

     return (
          <>{
               product && Object.keys(product).length &&
               <div className="max-w-screen-xl mx-auto grid grid-flow-row md:grid-cols-12 bg-white p-2 gap-3">
                    <div className="h-fit col-span-6 md:col-span-5 border shadow-sm shadow-gray-600">
                         <ProductItemDisplay product={product} />
                    </div>
                    <div className="col-span-6 md:col-span-7">
                         <p className="text-xl font-semibold p-2">{product.title.longTitle}</p>
                         <div>
                              <div className="flex items-center gap-2 text-[0.8rem] p-2">
                                   <div className="inline-flex items-center gap-1 bg-green-700 text-white px-1 rounded-[5px]">
                                        <span>4.1</span>
                                        <FaStar size={10} />
                                   </div>
                                   <p className="text-gray-500 font-semibold">5,47,205 Ratings & 58,752 Reviews</p>
                                   <img 
                                        src={fassured} 
                                        alt="fAssured"
                                        className="w-[80px] h-auto cursor-pointer"
                                   />
                              </div>

                         </div>
                         <p className="text-green-700 font-semibold p-2">Special Price</p>
                         <div className="flex flex-row items-center gap-3 p-2">
                              <p className="text-2xl">&#8377;{product.price.cost}</p>
                              <s>&#8377;{product.price.mrp}</s>
                              <p className="text-green-700 font-bold">{product.price.discount}off</p>
                         </div>

                         {/* Product detail info */}
                         <ProductDetailInfo />

                         {/* Product Detail Table */}
                         <ProductDetailTable description={product.description}/>
                    </div>

               </div>

          }</>
     );
}

export default ProductDetailView;