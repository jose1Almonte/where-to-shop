import Styles from './InternalCardStore.module.css'
// import todoQueso from '../../images/todoQuesoFront.jpg'
import ProgressBar from "@ramonak/react-progress-bar";

export default function InternalCardStore() {
  return (
    <div className={Styles.container}>
        <div className={Styles.image} style={{backgroundImage: 'url(src/images/todoQuesoFront.jpg)'}}/>
        <h2 className={Styles.title}>Food - All Cheese</h2>
        
        <ProgressBar 
        completed={60}
        // barContainerClassName={Styles.progressBarContainer}
        borderRadius= {3}
        height='5px'
        labelSize= {10}
        bgColor = {'#00A991'} // progressed bar
        baseBgColor = {'#E0E0E0'} // all bar
        isLabelVisible={false}
        animateOnRender={true}
        />
    </div>
  )
}
