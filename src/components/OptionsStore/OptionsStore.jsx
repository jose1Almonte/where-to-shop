import ButtonType1 from "../ButtonType1/ButtonType1";
import Styles from './OptionsStore.module.css'

export default function OptionsStore() {
  return (
    <div className={Styles.container}>
        <ButtonType1 text="Check Store" style={Styles.button} />
        <ButtonType1 text="How to go" style={`${Styles.button} ${Styles.right}`} />
    </div>
  )
}
