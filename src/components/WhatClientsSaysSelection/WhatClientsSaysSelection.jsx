import Styles from './WhatClientsSaysSelection.module.css'
import ArrowsBox from '../ArrowsBox/ArrowsBox'
import PropTypes from 'prop-types';

export default function WhatClientsSaysSelection({clientSays, comentarySelected, setComentarySelected}) {
  return (
    <div className={Styles.container}>

        <section className={Styles.text}>
        <span className={Styles.title}>TESTIMONALS</span>
        <h1 className={Styles.description}>What our clients have been saying about us.</h1>
        </section>

        <ArrowsBox clientSays={clientSays} comentarySelected={comentarySelected} setComentarySelected={setComentarySelected}/>
    </div>
  )
}

WhatClientsSaysSelection.propTypes = {
  clientSays: PropTypes.any.isRequired,
  comentarySelected: PropTypes.number.isRequired,
  setComentarySelected: PropTypes.any.isRequired,
};
