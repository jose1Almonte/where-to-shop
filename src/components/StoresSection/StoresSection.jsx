import CardStoresSection from '../CardStoresSection/CardStoresSection'
import Styles from './StoresSection.module.css'

export default function StoresSection() {
  return (
    <div className={Styles.container}>
      <section className={Styles.section}>
        <h2>Our stores</h2>
        <h2 className={Styles.title}>Check The Stores You Want To Buy</h2>
        <CardStoresSection/>
      </section>
    </div>
  )
}
