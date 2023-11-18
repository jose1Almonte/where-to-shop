import PropTypes from 'prop-types';

export default function SignUp({loginAction}) {
  return (
    <button className={`${'button'}`} onClick={loginAction}>
        SIGN UP
    </button>
  )
}

SignUp.propTypes = {
  loginAction: PropTypes.any.isRequired,
};
