import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const responsive = {
     desktop: {
       breakpoint: { max: 3000, min: 1024 },
       items: 5
     },
     tablet: {
       breakpoint: { max: 1024, min: 650 },
       items: 2
     },
     mobile: {
       breakpoint: { max: 650, min: 0 },
       items: 1
     }
   };

const Slides = ({ product ,title }) => {

     return (
          <div className=' bg-white mt-2'>
               <div className=' flex items-center justify-between py-4  px-6 border-b-2 '>
                    <p className='text-[1rem] font-bold md:text-2xl'>{title}</p>
                    <IoIosArrowForward className='bg-blue-600 rounded-full p-1 text-white hover:scale-110 cursor-pointer h-6 md:h-8 w-auto' />
               </div>
               <Carousel
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    keyBoardControl={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}    
                    centerMode={true}

                    className='p-3'
               >
                    {
                         product.map(({ _id, url, title, discount }) => (
                              <Link to={`/product/${_id}`}>
                              <div key={_id} className=' mr-3 flex flex-col items-center gap-2'>
                                   <img src={url} alt="Product" className='h-[90px] md:h-[130px] w-auto'/>
                                   <p>{title.shortTitle}</p>
                                   <p className='text-green-800'>{discount}</p>
                              </div>
                              </Link>
                         ))
                    }
               </Carousel>
          </div>
     );
}

export default Slides
