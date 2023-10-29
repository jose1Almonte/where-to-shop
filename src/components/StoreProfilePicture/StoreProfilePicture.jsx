import Styles from './StoreProfilePicture.module.css'
import todoQueso from '../../images/todoQuesoFront.jpg'

export default function StoreProfilePicture() {
  return (
    <div className={Styles.container} style={{backgroundImage: `url(${todoQueso})`}}/>
    
  )
}
