import Styles from './InformationText.module.css'
import horizontalLine from '../../vectors/horizontalLine.svg'

export default function InformationText() {
  return (
    <div className={Styles.container}>
        <div className={Styles.upContainer}>
            <img  className={`${Styles.general} ${Styles.up}`} src={horizontalLine}/>
            <span className={`${Styles.general} ${Styles.up}`} >Check this!</span>
        </div>
        
        <span className={`${Styles.general} ${Styles.down}`} >Here is all you need</span>
    </div>
  )
}
