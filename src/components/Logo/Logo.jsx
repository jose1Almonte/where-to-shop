import logo from '../../vectors/logo.svg'
import Styles from './Logo.module.css'

export default function Logo() {
  return (
    <>
    <img src={logo} className={Styles.logoStyles}/>
    </>
  )
}
