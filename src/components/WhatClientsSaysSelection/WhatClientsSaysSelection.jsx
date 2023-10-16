import Styles from './WhatClientsSaysSelection.module.css'
import ArrowsBox from '../ArrowsBox/ArrowsBox'

export default function WhatClientsSaysSelection() {
  return (
    
    <div className={Styles.container}>

        <section className={Styles.text}>
        <span className={Styles.title}>TESTIMONALS</span>
        <h1 className={Styles.description}>What our clients have been saying about us.</h1>
        </section>

        <ArrowsBox/>
    </div>
  )
}
