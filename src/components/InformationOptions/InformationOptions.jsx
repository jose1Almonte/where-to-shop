import InformationSelect from '../InformationSelect/InformationSelect'
import InformationText from '../InformationText/InformationText'
import Styles from './InformationOptions.module.css'
import PropTypes from 'prop-types';

export default function InformationOptions({selected, setSelected}) {
  return (
    <div className={Styles.container}>
        <InformationSelect selected={selected} setSelected={setSelected}/>
        <InformationText/>
    </div>
  )
}

InformationOptions.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.any.isRequired,
};