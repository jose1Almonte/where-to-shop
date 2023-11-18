import PropTypes from 'prop-types';

export default function Logout({logoutAction}) {
  return (
    <button className={`${'button'}`} onClick={logoutAction}>
        LOG OUT
    </button>
  )
}

Logout.propTypes = {
  logoutAction: PropTypes.any.isRequired,
};