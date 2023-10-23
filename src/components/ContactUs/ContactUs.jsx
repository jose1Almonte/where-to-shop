import Styles from './ContactUs.module.css'
import ContactText from '../ContactText/ContactText'
import ContactSocials from '../ContactSocials/ContactSocials'

export default function ContactUs() {
  return (
    <>
        <div className={Styles.greenRow}/>
        <div className={Styles.container}>
            <section className={Styles.section}>
                <ContactText/>
                <ContactSocials/>
            </section>
        </div>
    </>
  )
}
