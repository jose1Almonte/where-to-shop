import Styles from './StoreTitleAndDescription.module.css'
import pretzel from '../../vectors/pretzel.svg'
import StoreProfilePicture from '../StoreProfilePicture/StoreProfilePicture'
import greenAndLineCircles from '../../vectors/greenAndLineCircles.svg'

export default function StoreTitleAndDescription() {
  return (
    <div className={Styles.container}>
        <h6 className={Styles.title}>All Cheese</h6>
        <p className={Styles.description}>Discover our specialty store, dedicated to offering delightful foods, top-notch cleaning supplies, and exceptional cheeses!</p>
        <img src={pretzel} alt="" className={Styles.pretzel} />
        <StoreProfilePicture/>
        <img src={greenAndLineCircles} alt="" className={Styles.greenAndLineCircles} />
    </div>
  )
}
