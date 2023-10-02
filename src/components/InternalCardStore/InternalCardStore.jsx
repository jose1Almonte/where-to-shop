import Styles from './InternalCardStore.module.css'
// import todoQueso from '../../images/todoQuesoFront.jpg'

export default function InternalCardStore() {
  return (
    <div className={Styles.container}>
        <div className={Styles.image} style={{backgroundImage: 'url(src/images/todoQuesoFront.jpg)'}}/>
        <h2 className={Styles.title}>Food - All Cheese</h2>
    </div>
  )
}
