import { Carousel } from 'react-responsive-carousel';
import { bannerData } from '../../constants/Data';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = ()=>{
     return(
          <Carousel
          autoPlay= {true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          swipeable={false}
          onClickItem={()=>console.log("CLicked")}
          className='py-1'
          >
               {
                    bannerData.map(({id,url})=>(
                         <img key={id} src={url} alt=''/>
                    ))
               }
          </Carousel>
     );
}

export default Banner;