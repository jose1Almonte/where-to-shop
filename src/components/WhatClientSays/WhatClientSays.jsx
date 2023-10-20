import Styles from './WhatClientSays.module.css'
import PropTypes from 'prop-types';

export default function WhatClientSays({clientSays, comentarySelected}) {
  return (
    <div className={Styles.container}>
        <p className={Styles.description}>{clientSays[comentarySelected].description}</p>

        <div className={Styles.secondRow}>
            <div className={Styles.img} style={{backgroundImage: clientSays[comentarySelected].profileUrl}}/>
            <section className={Styles.userData}>
            <p className={Styles.title}>{clientSays[comentarySelected].name}</p>
            <p className={Styles.email}>{clientSays[comentarySelected].email}</p>
            </section>
        </div>
    </div>
  )
}

WhatClientSays.propTypes = {
    clientSays: PropTypes.any.isRequired,
    comentarySelected: PropTypes.number.isRequired,
  };
