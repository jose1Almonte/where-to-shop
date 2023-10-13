// import ReactPlayer from 'react-player/youtube';
import Styles from './InterestInformationSection.module.css'
import ellipse from '../../vectors/ellipse.svg'
import InformationOptions from '../InformationOptions/InformationOptions'
import CollageImage from '../CollageImage/CollageImage'
import { useState } from 'react';

export default function InterestInformationSection() {
  const [selected, setSelected] = useState('Stores');
  return (
    <section className={Styles.container}>
        <div className={Styles.ellipseContainer}>
            <img src={ellipse} className={Styles.ellipse}/>
        </div>
        <h3 className={Styles.title}>{"Let's Find Some Interest Information!"}</h3>
        
        <InformationOptions selected={selected} setSelected={setSelected}/>
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
        <CollageImage selected={selected}/>
    </section>
  )
}
