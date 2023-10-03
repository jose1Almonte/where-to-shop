import Styles from './ButtonType1.module.css'
import PropTypes from 'prop-types';


export default function ButtonType1({text, style}) {
  return (
    <button className={`${'button'} ${Styles.button} ${style}`}>
        {text ? (
          <>
            {text}
          </>
        ) : (
          <>
            Find your store
          </>
        )}
    </button>
  )
}

ButtonType1.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.any.isRequired,
};
