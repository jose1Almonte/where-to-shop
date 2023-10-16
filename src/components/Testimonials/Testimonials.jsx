// import testimonialsBackground from '../../vectors/testimonialsBackground.svg'
import WhatClientsSaysSelection from '../WhatClientsSaysSelection/WhatClientsSaysSelection'
import Styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <div className={Styles.container}>
        <WhatClientsSaysSelection/>
        <WhatClientsSaysSelection/>
    </div>
  )
}
