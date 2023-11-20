import Styles from './StoreTitleAndDescription.module.css'
import pretzel from '../../vectors/pretzel.svg'
import StoreProfilePicture from '../StoreProfilePicture/StoreProfilePicture'
import greenAndLineCircles from '../../vectors/greenAndLineCircles.svg'
import PropTypes from 'prop-types';

export default function StoreTitleAndDescription({userName, showDescription, photoURL}) {
  return (
    <div className={Styles.container}>
        <h6 className={Styles.title}>{userName ? userName : 'All Cheese'}</h6>
        {showDescription && (
          <p className={Styles.description}>Discover our specialty store, dedicated to offering delightful foods, top-notch cleaning supplies, and exceptional cheeses!</p>
        )}
        <img src={pretzel} alt="" className={Styles.pretzel} />
        <StoreProfilePicture photoURL={photoURL}/>
        <img src={greenAndLineCircles} alt="" className={Styles.greenAndLineCircles} />
    </div>
  )
}

StoreTitleAndDescription.propTypes = {
  userName: PropTypes.any.isRequired,
  showDescription: PropTypes.any.isRequired,
  photoURL: PropTypes.any.isRequired,
};
