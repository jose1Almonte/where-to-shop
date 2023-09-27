import {useState, useEffect} from 'react';
import Styles from './Carousel.module.css'
import leftArrow from '../../vectors/leftArrow.svg'
import rightArrow from '../../vectors/rightArrow.svg'
import paloVerdeCaracas from '../../images/paloVerdeCaracas.jpg'
import paloVerdeCaracas2 from '../../images/paloVerdeCaracas2.jpeg'

const images = [
    paloVerdeCaracas2,
    paloVerdeCaracas,
]

export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        console.log(currentIndex);
    }, [currentIndex])

  return (
    <section className={Styles.carousel}>
        {/* <div className={Styles.imageDiv}/> */}
        <img src={images[currentIndex]} className={Styles.imageDiv}/>
        <img src={leftArrow} onClick={() => {goToPreviousSlide()}} className={`${Styles.arrow} ${Styles.left}`}/>
        <img src={rightArrow} onClick={() => {goToNextSlide()}} className={`${Styles.arrow} ${Styles.right}`}/>
    </section>
  )
}
