import Styles from './Carousel.module.css'
import paloVerdeCaracas from '../../images/paloVerdeCaracas.jpg'
import paloVerdeCaracas2 from '../../images/paloVerdeCaracas2.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Caro } from 'react-responsive-carousel';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import TextCarousel from '../TextCarousel/TextCarousel';
import CarouselOptions from '../CarouselOptions/CarouselOptions';

const images = [
    paloVerdeCaracas,
    paloVerdeCaracas2,
]

export default function Carousel() {

  return (
    <section className={Styles.carousel}>

        <Caro 
        className={Styles.caro}
        infiniteLoop={true} 
        swipeScrollTolerance={1} 
        preventMovementUntilSwipeScrollTolerance={true} 
        autoPlay={true} 
        interval={5000} 
        transitionTime={1000} 
        showStatus={false} 
        showIndicators={false}
        showThumbs={false} 
        renderArrowPrev={(clickHandler, hasPrev) => (
            <button onClick={clickHandler} disabled={!hasPrev} className={`${Styles.arrow} ${Styles.left}`}>
              <FaLessThan color='white' size={25}/>
            </button>
        )}
        renderArrowNext={(clickHandler, hasPrev) => (
          <button onClick={clickHandler} disabled={!hasPrev} className={`${Styles.arrow} ${Styles.right}`}>
            <FaGreaterThan color='white' size={25}/>
          </button>
      )}
        >
        {images.map((image, index) => 
            <img src={image} key={index}  className={Styles.imageDiv}/>
        )}
        </Caro>

        <TextCarousel/>
        <CarouselOptions/>
        </section>
  )
}
