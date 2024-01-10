import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/ProductAction";
import ProductItemDisplay from "./ProductItemDisplay";
import { FaStar } from "react-icons/fa";

const ProductDetailView = () => {

     const { product } = useSelector(state => state.getProductDetails)

     const { id } = useParams();

     const dispatch = useDispatch()

     console.log(product)

     useEffect(() => {
          if (product._id !== id) {
               dispatch(getProductDetails(id))
          }
     }, [dispatch, id])

     return (
          <>{
               product && Object.keys(product).length &&
               <div className="max-w-screen-xl mx-auto grid grid-flow-row md:grid-cols-12 bg-white p-2 gap-3">
                    <div className="col-span-6 md:col-span-4 border shadow-sm shadow-gray-600">
                         <ProductItemDisplay product={product} />
                    </div>
                    <div className="col-span-6 md:col-span-8">
                         <p className="text-2xl">{product.title.longTitle}</p>
                         <div>
                         <div className="flex gap-2 text-[0.8rem]">
                              <div className="inline-flex items-center gap-1 bg-green-700 text-white px-1 rounded-[5px]">
                              <span>4.1</span>
                              <FaStar size={10}/>
                              </div>
                              <p className="text-gray-500 font-semibold">5,47,205 Ratings & 58,752 Reviews</p>
                         </div>
                         
                         </div>
                         <p className="text-green-700 font-semibold">Special Price</p>
                         <div className="flex flex-row items-center gap-3 ">
                         <p className="text-2xl">&#8377;{product.price.cost}</p>
                         <s>&#8377;{product.price.mrp}</s>
                         <p className="text-green-700 font-bold">{product.price.discount}off</p>
                         </div>
                    </div>

               </div>

          }</>
     );
}

// {
//      "_id":{"$oid":"65927b2fe730950e22eacb8f"},
//      "id":"product1",
//      "url":"https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
//      "detailUrl":"https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
//      "title":{"shortTitle":"Home & Kitchen","longTitle":"Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)"},
//      "price":{"mrp":{"$numberInt":"1195"},
//      "cost":{"$numberInt":"625"},
//       "discount":"47%"},
//      "quantity":{"$numberInt":"1"},
//      "description":"This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.","discount":"Extra 10% Off",
//      "tagline":"Deal of the day",
//      "__v":{"$numberInt":"0"}
// }


export default ProductDetailView;