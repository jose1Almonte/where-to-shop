import PlusOrMinusButton from '../PlusOrMinusButton/PlusOrMinusButton'
import Styles from './ProductQuantitySelection.module.css'
import plus from '../../vectors/plus.svg'
import minus from '../../vectors/minus.svg'
import { useState } from 'react';
import { isInteger } from '../../helpers/isInteger';

export default function ProductQuantitySelection() {
  const [quantity, setQuantity] = useState('0');

  const handleInputChange = (event) => {
    console.log('event', event.target.value)
    setQuantity(event.target.value);
  };

  const handleIncrement = () => {
    if (parseInt(quantity, 10) >= 0 && isInteger(quantity)) {
      setQuantity((prevQuantity) => String(parseInt(prevQuantity, 10) + 1));
    } else {
      setQuantity(String(1))
    }
  };

  const handleDecrement = () => {

      if (parseInt(quantity, 10) > 0 && isInteger(quantity)) {
        setQuantity((prevQuantity) => String(parseInt(prevQuantity, 10) - 1));
      } else {
        setQuantity(String(0))
      }

  };

  return (
    <div className={Styles.container}>
        <PlusOrMinusButton vector={minus} onClick={handleDecrement}/>
        <input
        type="text"
        className={Styles.value}
        placeholder="0"
        value={quantity}
        onChange={handleInputChange}
        style={{ width: `${quantity.length * 2.2}vw` }}
      />
        <PlusOrMinusButton vector={plus} onClick={handleIncrement}/>
    </div>
  )
}
