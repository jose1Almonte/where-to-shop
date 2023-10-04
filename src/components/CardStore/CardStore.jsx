import InternalCardStore from '../InternalCardStore/InternalCardStore'
import Styles from './CardStore.module.css'
import PropTypes from 'prop-types';

export default function CardStore({cardStore, number, maxNumber}) {
  return (
    <section className={Styles.container}>
        <InternalCardStore cardStore={cardStore} number={number} maxNumber={maxNumber}/>
    </section>
  )
}

CardStore.propTypes = {
  cardStore: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
  maxNumber: PropTypes.number.isRequired,
};