import leftArrow from '../../vectors/leftArrow.svg'
import rightArrow from '../../vectors/rightArrow.svg'
import Arrow from '../Arrow/Arrow'
import Styles from './ArrowsBox.module.css'

export default function ArrowsBox() {
  return (
    <section className={Styles.container}>
    <Arrow vector={leftArrow}/>
    <Arrow vector={rightArrow}/>
    </section>
  )
}
