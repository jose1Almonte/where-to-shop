import PlusOrMinusButton from '../PlusOrMinusButton/PlusOrMinusButton'
import Styles from './ProductQuantitySelection.module.css'
import plus from '../../vectors/plus.svg'
import minus from '../../vectors/minus.svg'

export default function ProductQuantitySelection() { 
    return (
    <div className={Styles.container}>
        <PlusOrMinusButton vector={minus}/>
        <input className = {Styles.value} type="text" placeholder='0' />
        <PlusOrMinusButton vector={plus}/>
    </div>
  )
}
