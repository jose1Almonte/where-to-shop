import Styles from './StoreProfilePicture.module.css'
import todoQueso from '../../images/todoQuesoFront.jpg'
import PropTypes from 'prop-types';

export default function StoreProfilePicture({photoURL}) {
  return (
    <>
    <div className={Styles.container} style={{backgroundImage: `url(${photoURL ? photoURL : todoQueso})`}}/>
    </>
  )
}

StoreProfilePicture.propTypes = {
  userName: PropTypes.any.isRequired,
  showDescription: PropTypes.any.isRequired,
  photoURL: PropTypes.any.isRequired,
};
