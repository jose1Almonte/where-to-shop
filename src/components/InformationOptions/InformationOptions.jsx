import InformationSelect from '../InformationSelect/InformationSelect'
import InformationText from '../InformationText/InformationText'
import Styles from './InformationOptions.module.css'

export default function InformationOptions() {
  return (
    <div className={Styles.container}>
        <InformationSelect/>
        <InformationText/>
    </div>
  )
}
