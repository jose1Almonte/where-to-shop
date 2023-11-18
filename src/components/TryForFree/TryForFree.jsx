import PropTypes from 'prop-types';

export default function TryForFree({loginAction}) {
  return (
    <button className={`${'button'}`} onClick={loginAction}>
        TRY FOR FREE
    </button>
  )
}

TryForFree.propTypes = {
  loginAction: PropTypes.any.isRequired,
};
