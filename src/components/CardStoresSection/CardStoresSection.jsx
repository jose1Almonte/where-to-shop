import CardStore from "../CardStore/CardStore";
import Styles from './CardStoresSection.module.css'

export default function CardStoresSection() {
  const numbers = {
    number: 2.5,
    maxNumber: 5,
  };
  return (
    <section className={Styles.container}>
        <CardStore number={numbers.number} maxNumber={numbers.maxNumber}/>
        <CardStore number={4} maxNumber={numbers.maxNumber}/>
        <CardStore number={2} maxNumber={numbers.maxNumber}/>
        <CardStore number={1} maxNumber={numbers.maxNumber}/>
        <CardStore number={3} maxNumber={numbers.maxNumber}/>
        <CardStore number={5} maxNumber={numbers.maxNumber}/>
    </section>
  )
}
