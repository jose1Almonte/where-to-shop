import Styles from './RatingText.module.css'
import star from '../../vectors/star.svg'
import PropTypes from 'prop-types';

export default function RatingText({number}) {
  return (
    <section className={Styles.container}>
    <h2 className={Styles.ratingText}>Rating</h2>

    <div className={Styles.calification}>
        <h2 className={Styles.number}>{number}</h2>
        <img src={star} className={Styles.star}/>
    </div>
    </section>
  )
}

RatingText.propTypes = {
    number: PropTypes.number.isRequired,
  };
