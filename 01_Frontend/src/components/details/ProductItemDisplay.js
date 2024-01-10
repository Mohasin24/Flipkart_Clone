
// {
//      "_id":{"$oid":"65927b2fe730950e22eacb8f"},
//      "id":"product1",
//      "url":"https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
//      "detailUrl":"https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
//      "title":{"shortTitle":"Home & Kitchen","longTitle":"Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)"},
//      "price":{"mrp":{"$numberInt":"1195"},
//      "cost":{"$numberInt":"625"},"discount":"47%"},
//      "quantity":{"$numberInt":"1"},
//      "description":"This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.","discount":"Extra 10% Off",
//      "tagline":"Deal of the day",
//      "__v":{"$numberInt":"0"}
// }    

const ProductItemDisplay = ({product})=>{
     return(
         <div className="md:p-4">
          <img className="mx-auto w-[70%] md:w-full h-auto" src={product.detailUrl} alt="Product" />
          <div className="text-white flex justify-evenly gap-2 my-2">
               <button className="bg-amber-500 w-full p-2">ADD TO CART</button>
               <button className="bg-orange-500 w-full p-2">BUY NOW</button>
          </div>
         </div>
     );
}

export default ProductItemDisplay;