import Styles from './LocationSection.module.css'
import paloVerde2 from '../../images/paloVerdeCaracas2.jpeg'

export default function LocationSection() {
  return (
    <div className={Styles.container} style={{backgroundImage: `url(${paloVerde2})`}}/>
  )
}
