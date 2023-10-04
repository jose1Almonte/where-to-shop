import OptionsStore from '../OptionsStore/OptionsStore'
import RatingStore from '../RatingStore/RatingStore'
import Styles from './InternalCardStore.module.css'
// import todoQueso from '../../images/todoQuesoFront.jpg'
import PropTypes from 'prop-types';

export default function InternalCardStore({cardStore, maxNumber}) {

  return (
    <div className={Styles.container}>
      <section>
        <div className={Styles.image} style={{backgroundImage: cardStore.url}}/>
        <h2 className={Styles.title}>{cardStore.text}</h2>
      </section>
        
        <section className={Styles.miniSection}>
          <RatingStore cardStore={cardStore} maxNumber={maxNumber}/>
          <OptionsStore/>
        </section>
    </div>
  )
}

InternalCardStore.propTypes = {
  cardStore: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
  maxNumber: PropTypes.number.isRequired,
};