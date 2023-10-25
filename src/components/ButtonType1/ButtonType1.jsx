import { Link } from 'react-router-dom';
import Styles from './ButtonType1.module.css'
import PropTypes from 'prop-types';


export default function ButtonType1({text, style, to}) {
  return (
    <Link to={to} className={`${'button'} ${Styles.button} ${style}`}>
        {text ? (
          <>
            {text}
          </>
        ) : (
          <>
            Find your store
          </>
        )}
    </Link>
  )
}

ButtonType1.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  
};
