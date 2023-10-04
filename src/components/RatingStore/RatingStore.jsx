import ProgressBar from "@ramonak/react-progress-bar";
// import Styles from './RatingStore.module.css';
import RatingText from "../RatingText/RatingText";
import PropTypes from 'prop-types';

export default function RatingStore({ maxNumber, cardStore}) {
    const windowWidth = window.innerWidth;
  return (
    <section>
    <RatingText number={cardStore.rating}/>
    <ProgressBar 
        completed={cardStore.rating}
        maxCompleted={maxNumber}
        borderRadius= {3}
        height={0.5*windowWidth/100}
        labelSize= {10}
        bgColor = {'#00A991'} // progressed bar
        baseBgColor = {'#E0E0E0'} // all bar
        isLabelVisible={false}
        animateOnRender={true}
        />
    </section>
  )
}

RatingStore.propTypes = {
    // number: PropTypes.number.isRequired,
    maxNumber: PropTypes.number.isRequired,
    cardStore: PropTypes.object.isRequired,
};