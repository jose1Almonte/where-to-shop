import CarouselIndividualOption from '../CarouselIndividualOption/CarouselIndividualOption'
import Styles from './CarouselOptions.module.css'

export default function CarouselOptions() {
  return (
    <div className={Styles.container}>
        <CarouselIndividualOption/>
    </div>
  )
}
