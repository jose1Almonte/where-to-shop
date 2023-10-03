import InternalCardStore from '../InternalCardStore/InternalCardStore'
import Styles from './CardStore.module.css'
import PropTypes from 'prop-types';

export default function CardStore({number, maxNumber}) {
  return (
    <section className={Styles.container}>
        <InternalCardStore number={number} maxNumber={maxNumber}/>
    </section>
  )
}

CardStore.propTypes = {
  number: PropTypes.number.isRequired,
  maxNumber: PropTypes.number.isRequired,
};