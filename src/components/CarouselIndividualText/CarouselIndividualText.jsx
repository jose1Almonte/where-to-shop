import Styles from './CarouselIndividualText.module.css'
import PropTypes from 'prop-types';

export default function CarouselIndividualText({title, description}) {
  return (
    <div className={Styles.textContainer}>
        <p className={Styles.textSection}>{title}</p>
        <p className={Styles.descriptionSection}>{description}</p>
    </div>
  )
}

CarouselIndividualText.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
