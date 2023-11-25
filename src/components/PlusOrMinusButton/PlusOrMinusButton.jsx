import PropTypes from 'prop-types';
import Styles from './PlusOrMinusButton.module.css'

export default function PlusOrMinusButton({vector, onClick}) {
  return (
    <div className={Styles.buttonContainer} onClick={() => {onClick()}}>
        <img className={Styles.vector} src={vector} alt="" />
    </div>
  )
}

PlusOrMinusButton.propTypes = {
  vector: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired,
};
