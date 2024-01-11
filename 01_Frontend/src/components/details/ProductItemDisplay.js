
const ProductItemDisplay = ({product})=>{
     return(
         <div className="md:p-4">
          <img className="mx-auto w-[70%] md:w-[90%] h-auto" src={product.detailUrl} alt="Product" />
          <div className="text-white flex justify-evenly gap-2 my-2">
               <button className="bg-amber-500 w-full p-2">ADD TO CART</button>
               <button className="bg-orange-500 w-full p-2">BUY NOW</button>
          </div>
         </div>
     );
}

export default ProductItemDisplay;