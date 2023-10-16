import Styles from './Arrow.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

export default function Arrow({vector}) {
    const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div className={`${Styles.container} ${Styles.transition}`}
    onMouseEnter={() => {setMouseEnter(true)}}
    onMouseLeave={() => {setMouseEnter(false)}}>
        <img className={`${Styles.leftArrow} ${Styles.transition}`} 
        src={vector} alt="" style={mouseEnter ? {filter: "brightness(0) invert(1)"} : {}}/>
    </div>
  )
}

Arrow.propTypes = {
    vector: PropTypes.any.isRequired,
  };
