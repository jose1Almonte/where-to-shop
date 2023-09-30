import Styles from './CarouselIndividualOption.module.css'
import PropTypes from 'prop-types';
import CarouselIndividualText from '../CarouselIndividualText/CarouselIndividualText';

export default function CarouselIndividualOption({colorizedContainer, vector, title, description}) {
  return (
    <div className={Styles.individualOption} style={colorizedContainer}>
        <img src={vector} className={Styles.vectorStyles}/>
        <CarouselIndividualText title={title} description={description}/>
    </div>
  )
}

CarouselIndividualOption.propTypes = {
  colorizedContainer: PropTypes.any.isRequired,
  vector: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
