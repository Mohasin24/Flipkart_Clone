import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/Data';

const responsive = {
     desktop: {
       breakpoint: { max: 3000, min: 1024 },
       items: 1
     },
     tablet: {
       breakpoint: { max: 1024, min: 650 },
       items: 1
     },
     mobile: {
       breakpoint: { max: 650, min: 0 },
       items: 1
     }
   };

const Banner = ()=>{
     return(
          <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}    
          showDots={true}
          renderDotsOutside={false}
          
          className='my-2 cursor-pointer'
          
          >
               {
                    bannerData.map(({id,url})=>(
                         <img key={id} src={url} alt='Banner'/>
                    ))
               }
          </Carousel>
     );
}

export default Banner;