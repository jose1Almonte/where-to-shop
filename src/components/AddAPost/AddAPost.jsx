import Styles from './AddAPost.module.css'
import city from '../../vectors/city.svg'
import AddAPostText from '../AddAPostText/AddAPostText'
import BlackButton from '../BlackButton/BlackButton'

export default function AddAPost() {
  return (
    <div className={Styles.container} style={{backgroundImage:`url(${city})`}}>
        <AddAPostText/>
        <BlackButton/>
    </div>
  )
}
