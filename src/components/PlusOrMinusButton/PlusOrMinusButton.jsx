import PropTypes from 'prop-types';
import Styles from './PlusOrMinusButton.module.css'

export default function PlusOrMinusButton({vector}) {
  return (
    <div className={Styles.buttonContainer}>
        <img className={Styles.vector} src={vector} alt="" />
    </div>
  )
}

PlusOrMinusButton.propTypes = {
  vector: PropTypes.any.isRequired,
};
