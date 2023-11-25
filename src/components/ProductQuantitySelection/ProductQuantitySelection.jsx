import PlusOrMinusButton from '../PlusOrMinusButton/PlusOrMinusButton'
import Styles from './ProductQuantitySelection.module.css'
import plus from '../../vectors/plus.svg'
import minus from '../../vectors/minus.svg'
import { useState } from 'react';

export default function ProductQuantitySelection() {
  const [quantity, setQuantity] = useState('0');

  const handleInputChange = (event) => {
    console.log('event', event.target.value)
    setQuantity(event.target.value);
  };

  return (
    <div className={Styles.container}>
        <PlusOrMinusButton vector={minus}/>
        <input
        type="text"
        className={Styles.value}
        placeholder="0"
        value={quantity}
        onChange={handleInputChange}
        style={{ width: `${quantity.length * 2.2}vw` }}
      />
        <PlusOrMinusButton vector={plus}/>
    </div>
  )
}
