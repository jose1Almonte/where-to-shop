import ButtonType1 from '../ButtonType1/ButtonType1'
import Styles from './TextCarousel.module.css'

export default function TextCarousel() {
  return (
    <div className={Styles.textContainer}>
        <h1>Best way to buy</h1>
        <span className={Styles.text}>
          Explore freely. Search for your favorite stores or products. Filter by name, price, or watch interactive videos for exact locations. Discover more!
        </span>

        <ButtonType1/>
    </div>
  )
}
