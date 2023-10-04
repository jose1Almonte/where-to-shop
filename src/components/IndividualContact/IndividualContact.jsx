import Styles from './IndividualContact.module.css'
import PropTypes from 'prop-types';

export default function IndividualContact({contact}) {
  return (
    <section className={Styles.container}>
        <img src={contact.vector} className={Styles.image}/>
        <section>
            <p className={Styles.title}>{contact.title}</p>
            <p className={Styles.description}>{contact.number}</p>
        </section>
    </section>
  )
}

IndividualContact.propTypes = {
    contact: PropTypes.object.isRequired,
};
