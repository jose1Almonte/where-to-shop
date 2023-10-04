import IndividualContact from '../IndividualContact/IndividualContact'
import Styles from './ContactSection.module.css'
import phone from '../../vectors/phone.svg'
import mail from '../../vectors/mail.svg'
import location from '../../vectors/location.svg'


export default function ContactSection() {
    const contacts = [
        {
            vector: phone,
            title: 'Phone',
            number: '+1 111 111 11 11'
        },
        {
            vector: mail,
            title: 'Email',
            number: 'joseyv5@gmail.com'
        },
        {
            vector: location,
            title: 'Address',
            number: 'Palo Verde Caracas, Venezuela'
        },
    ] 

  return (
    <div className={Styles.container}>
        {
            contacts.map((contact, index) => (
                <IndividualContact contact={contact} key={index}/>
            ))
        }
        {/* <IndividualContact contact={contact}/>
        <IndividualContact contact={contact}/> */}
    </div>
  )
}
