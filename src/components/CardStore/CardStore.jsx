import InternalCardStore from '../InternalCardStore/InternalCardStore'
import Styles from './CardStore.module.css'

export default function CardStore() {
  return (
    <section className={Styles.container}>
        <InternalCardStore/>
    </section>
  )
}
