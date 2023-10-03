import OptionsStore from '../OptionsStore/OptionsStore'
import RatingStore from '../RatingStore/RatingStore'
import Styles from './InternalCardStore.module.css'
// import todoQueso from '../../images/todoQuesoFront.jpg'
import PropTypes from 'prop-types';

export default function InternalCardStore({number, maxNumber}) {

  return (
    <div className={Styles.container}>
      <section>
        <div className={Styles.image} style={{backgroundImage: 'url(src/images/todoQuesoFront.jpg)'}}/>
        <h2 className={Styles.title}>Food - All Cheese</h2>
      </section>
        
        <section className={Styles.miniSection}>
          <RatingStore number={number} maxNumber={maxNumber}/>
          <OptionsStore/>
        </section>
    </div>
  )
}

InternalCardStore.propTypes = {
  number: PropTypes.number.isRequired,
  maxNumber: PropTypes.number.isRequired,
};