import CarouselIndividualOption from '../CarouselIndividualOption/CarouselIndividualOption'
import Styles from './CarouselOptions.module.css'
import gps from '../../vectors/gps.svg'
import poblation from '../../vectors/poblation.svg'
import store from '../../vectors/store.svg'

export default function CarouselOptions() {
  return (
    <div className={Styles.container}>
        <CarouselIndividualOption title='Location' description='PALO VERDE' vector={gps}/>
        <CarouselIndividualOption title='Population' description='+500' vector={poblation} colorizedContainer={{backgroundColor: 'rgba(0, 135, 116, 1)'}}/>
        <CarouselIndividualOption title='Registered Stores' description='+100' vector={store}/>
    </div>
  )
}
