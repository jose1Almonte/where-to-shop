import sera from '../../vectors/sera.svg';
import Styles from './ContactText.module.css'

export default function ContactText() {
  return (
    <div className={Styles.container}>
        <img src={sera} alt="" className={Styles.sera} />
        <p className={Styles.text}>Where to Shop is a beautiful page created to help all the “Palo Verde” citizens to find the perfect store</p>
    </div>
  )
}
