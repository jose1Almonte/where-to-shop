import leftArrow from '../../vectors/leftArrow.svg'
import rightArrow from '../../vectors/rightArrow.svg'
import Arrow from '../Arrow/Arrow'
import Styles from './ArrowsBox.module.css'
import PropTypes from 'prop-types';

export default function ArrowsBox({clientSays, comentarySelected, setComentarySelected}) {

  const handleSubstract = () => {
    if (comentarySelected - 1 < 0) {
      setComentarySelected(clientSays.length - 1);
    } else {
      setComentarySelected(comentarySelected - 1)
    }
  }

  const handleAdd = () => {
    if (comentarySelected == clientSays.length - 1) {
      setComentarySelected(0);
    } else {
      setComentarySelected(comentarySelected + 1)
    }
  }

  return (
    <section className={Styles.container}>
    <Arrow vector={leftArrow} onClick={() => {handleSubstract()}}/>
    <Arrow vector={rightArrow} onClick={() => {handleAdd()}}/>
    </section>
  )
}

ArrowsBox.propTypes = {
  comentarySelected: PropTypes.number.isRequired,
  setComentarySelected: PropTypes.any.isRequired,
  clientSays: PropTypes.any.isRequired
};
